(function () {

  let states = [
    'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD',
    'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
    'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'
  ];

  function go() {

    // 0-based month indices
    let start = new Date(2017, 11, 27);
    let end   = new Date(2018, 10, 13);

    let dateParser = d3.timeParse('%Y-%m-%d');


    // Graphical dimensions
    let totalWidth  = document.body.clientWidth;
    let totalHeight = window.innerHeight || document.body.clientHeight;
    let margin      = { top: 20, right: 40, bottom: 20, left: 20 };
    let width       = totalWidth - (margin.right + margin.left);
    let height      = totalHeight - (margin.top + margin.bottom);

    let axisMargin = 60;
    let axisPadding = 10;
    let columnWidth = (width - (axisMargin + axisPadding)) / states.length;

    let yScale = d3.scaleTime()
        .domain([start, end])
        .range([0, height - (margin.top + margin.bottom)]);

    let yAxis = d3.axisLeft(yScale)
        .tickFormat(d3.timeFormat("%B"))
        .tickSize(-1 * (axisPadding + (columnWidth * states.length)));

    var tooltip = d3.select('body').append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    function showTooltip (d) {
      tooltip.transition().duration(200).style("opacity", 1.0);
      tooltip.html(d).style("left", (d3.event.pageX - 20) + "px").style("top", (d3.event.pageY - 20) + "px");
    }

    function hideTooltip (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    }

    let svg = d3.select('body').append('svg')
        .attr('id', 'calendar')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', height);

    svg
      .append('g')
      .attr('id', 'timeline')
      .attr('transform', 'translate(' + axisMargin + ',' + margin.top + ')')
      .call(yAxis);


    function stateColumn(state) {
      return states.indexOf(state) * columnWidth;
    }

    function setupStates(states) {
      let s = d3.select('#calendar').selectAll('g.state').data(states);

      function colX (d) { return axisMargin + axisPadding + stateColumn(d); }

      let gs = s.enter().append('g')
          .attr('id', function (d) { return d; })
          .attr('class', 'state')
          .attr('transform', function (d) { return 'translate(' + colX(d) + ',' + margin.top + ')'; })
          .on("mouseover", showTooltip)
          .on("mouseout", hideTooltip);

      gs.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', columnWidth - 4)
        .attr('height', yScale(end))
        .attr('fill', function (d) { return states.indexOf(d) % 2 == 0 ? 'rgba(0,0,256,0.05)' : 'rgba(256,0,0,0.05)'; })

      gs.append('image')
        .attr('href', function (d) { return 'images/' + d.toLowerCase() + '.png'; })
        .attr('x', 0)
        .attr('y', - margin.top)
        .attr('width', columnWidth - 4);
    }

    function elections(election_dates) {
      for (let state of states) {
        election_dates.push({ state: state, label: 'federal_general_election', date: '2018-11-06' })
      }

      if (false) {
        election_dates.push({"state": "AK", "label": "federal_general_election", "date": "2018-01-01"});
        election_dates.push({"state": "WY", "label": "federal_general_election", "date": "2018-01-01"});
      }

      let s = d3.select('#timeline').selectAll('g.election').data(election_dates);

      function cx (d) { return axisPadding + stateColumn(d.state) + ((columnWidth - 4) / 2); }

      s.enter()
        .filter(function (d) { return states.indexOf(d.state) !== -1; })
        .append('circle')
        .attr('class', function (d) { return d.label.split('_').join(' '); })
        .attr('r', 2)
        .attr('cx', cx)
        .attr('cy',  function (d) { return yScale(dateParser(d.date)); });

    }

    function earlyVotes(early_vote) {
      let s = d3.select('#timeline').selectAll('rect.early_vote').data(early_vote);

      function cx (d) { return axisPadding + stateColumn(d.state) + ((columnWidth - 4) / 2); }

      s.enter()
        .filter(function (d) { return states.indexOf(d.state) !== -1; })
        .append('rect')
        .attr('class', function (d) { return 'early_vote ' + d.type; })
        .attr('x', function (d) { return cx(d) - 2; })
        .attr('y', function (d) { return yScale(dateParser(d.start)); })
        .attr('width', 4)
        .attr('height', function (d) { return yScale(dateParser(d.end)) - yScale(dateParser(d.start)); })

    }

    setupStates(states);

    d3.json('elections.json', elections);
    d3.json('early_vote.json', earlyVotes);
  }

  document.addEventListener("DOMContentLoaded", go);

})();
