(function () {

  // For the momement only show the 50 states since that's what I have the flags for.
  let states = [
    'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD',
    'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH',
    'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'
  ];

  let nonStates = [ 'AS', 'DC', 'FM', 'GU', 'MH', 'MP', 'PR', 'PW', 'VI' ];

  let names = {
    'AK': 'Alaska',
    'AL': 'Alabama',
    'AR': 'Arkansas',
    'AS': 'American Samoa',
    'AZ': 'Arizona',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DC': 'District of Columbia',
    'DE': 'Delaware',
    'FL': 'Florida',
    'FM': 'Federated States of Micronesia',
    'GA': 'Georgia',
    'GU': 'Guam',
    'HI': 'Hawaii',
    'IA': 'Iowa',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'MA': 'Massachusetts',
    'MD': 'Maryland',
    'ME': 'Maine',
    'MH': 'Marshall Islands',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MO': 'Missouri',
    'MP': 'Northern Mariana Islands',
    'MS': 'Mississippi',
    'MT': 'Montana',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'NE': 'Nebraska',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NV': 'Nevada',
    'NY': 'New York',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'PR': 'Puerto Rico',
    'PW': 'Palau',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VA': 'Virginia',
    'VI': 'Virgin Islands',
    'VT': 'Vermont',
    'WA': 'Washington',
    'WI': 'Wisconsin',
    'WV': 'West Virginia',
    'WY': 'Wyoming',
  };

  function go() {

    // 0-based month indices
    let start = new Date(2017, 11, 27);
    let end   = new Date(2018, 10, 13);

    let dateParser = d3.timeParse('%Y-%m-%d');

    // Graphical dimensions
    let totalWidth  = document.body.clientWidth;
    let totalHeight = window.innerHeight || document.body.clientHeight;
    let margin      = { top: 20, right: 40, bottom: 120, left: 20 };
    let width       = totalWidth - (margin.right + margin.left);
    let height      = totalHeight - (margin.top + margin.bottom);
    let axisMargin  = 60;
    let axisPadding = 10;
    let columnWidth = (width - (axisMargin + axisPadding)) / states.length;

    // Tooltip
    var tooltip = d3.select('body').append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    function showTooltip (d) {
      tooltip.transition().duration(200).style("opacity", 1.0);
      tooltip.html(d).style("left", (d3.event.pageX - 20) + "px").style("top", (d3.event.pageY - 20) + "px");
    }

    function hideTooltip () {
      tooltip.transition().duration(500).style("opacity", 0);
    }

    let yScale = d3.scaleTime().domain([start, end]).range([0, height - margin.top]);

    let yAxis = d3.axisLeft(yScale)
        .tickFormat(d3.timeFormat("%B"))
        .tickSize(-1 * (axisPadding + (columnWidth * states.length)));

    function tooltipDate(date) {
      return d3.timeFormat('%A, %B %d')(dateParser(date));
    }

    let svg = d3.select('body').append('svg')
        .attr('id', 'calendar')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', totalHeight);

    svg.append('g')
      .attr('transform', 'translate(' + axisMargin + ',' + margin.top + ')')
      .call(yAxis);


    function addLegend () {

      let legend = svg.append('g')
          .attr('class', 'legend')
          .attr('transform', 'translate(' + (axisMargin * 2.0) + ',' + (height + 15) + ')');

      // Legend
      legend.append('circle').attr('class', 'federal general').attr('cx', 20) .attr('cy', 20);
      legend.append('text').attr('x', 28).attr('y', 24).text('Federal election');
      legend.append('circle').attr('class', 'federal primary').attr('cx', 20) .attr('cy', 40);
      legend.append('text').attr('x', 28).attr('y', 44).text('Federal primary');

      legend.append('circle').attr('class', 'state general').attr('cx', 160) .attr('cy', 20);
      legend.append('text').attr('x', 168).attr('y', 24).text('State election');
      legend.append('circle').attr('class', 'state primary').attr('cx', 160) .attr('cy', 40);
      legend.append('text').attr('x', 168).attr('y', 44).text('State primary');

      let labels = {
        'O': 'Online registration',
        'M': 'Vote by mail application',
        'R': 'Register to vote'
      };
      let i = 0;
      for (let label in labels) {
        let y = 24 + (i++ * 20);
        legend.append('text').attr('class', 'deadline').text(label).attr('x', 280).attr('y', y);
        legend.append('text').attr('x', 296).attr('y', y).text(labels[label]);
      }

      legend
        .append('rect')
        .attr('class', 'early_vote')
        .attr('x', 476)
        .attr('y', 10)
        .attr('width', 4)
        .attr('height', 60);
      legend.append('text').attr('x', 486).attr('y', 40).text('Early vote in person');
    }

    function stateColumn(state) {
        return states.indexOf(state) * columnWidth;
    }

    function setupStates(states) {
      let s = d3.select('#calendar').append('g').selectAll('g.state').data(states);

      function x (d) { return axisMargin + axisPadding + stateColumn(d); }

      let g = s.enter().append('g')
          .attr('class', 'state')
          .attr('transform', d => 'translate(' + x(d) + ',' + margin.top + ')');

      g.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', columnWidth - 4)
        .attr('height', yScale(end));

      g.append('image')
        .attr('href', d => 'images/' + d.toLowerCase() + '.png')
        .attr('x', 0)
        .attr('y', - margin.top)
        .attr('width', columnWidth - 4)
        .on("mouseover", d => showTooltip(names[d]))
        .on("mouseout", hideTooltip);

    }

    function extraElections(election_dates) {
      let extra = []
      for (let state of states) {
        extra.push({ state: state, label: 'federal_general_election', date: '2018-11-06' })
      }

      if (false) {
        extra.push({"state": "AK", "label": "federal_general_election", "date": "2018-01-01"});
        extra.push({"state": "WY", "label": "federal_general_election", "date": "2018-01-01"});
      }
      return extra;
    }

    function elections(election_dates) {
      election_dates = election_dates.concat(extraElections());

      d3.select('#calendar').selectAll('g.state').each(function (state) {
        d3.select(this).selectAll('circle.election').data(election_dates)
          .enter()
          .filter(d =>  d.state == state)
          .append('circle')
          .attr('class', d => d.label.split('_').join(' '))
          .attr('r', 2)
          .attr('cx', (columnWidth - 4)/2)
          .attr('cy',  d => yScale(dateParser(d.date)))
          .on("mouseover", d => showTooltip(tooltipDate(d.date)))
          .on("mouseout", hideTooltip);

      });
    }

    function earlyVotes(early_vote) {
      d3.select('#calendar').selectAll('g.state').each(function (state) {
        d3.select(this).selectAll('rect.early_vote').data(early_vote)
          .enter()
          .filter(d => d.state == state)
          .append('rect')
          .attr('class', d => 'early_vote ' + d.type)
          .attr('x', d => ((columnWidth - 4)/2) - 2)
          .attr('y', d => yScale(dateParser(d.start)))
          .attr('width', 4)
          .attr('height', d => yScale(dateParser(d.end)) - yScale(dateParser(d.start)))
          .on("mouseover", d => showTooltip(tooltipDate(d.start) + ' to ' + tooltipDate(d.end)))
          .on("mouseout", hideTooltip);

      });
    }

    function deadlines(dates) {
      d3.select('#calendar').selectAll('g.state').each(function (state) {
        d3.select(this).selectAll('text.deadline').data(dates)
          .enter()
          .filter(d => d.state == state)
          .append('text')
          .attr('class', 'deadline')
          .attr('x', (columnWidth - 4) / 2)
          .attr('y', d => yScale(dateParser(d.date)) + 4)
          .attr('text-anchor', 'middle')
          .text(d => d.label)
          .on("mouseover", d => showTooltip(tooltipDate(d.date)))
          .on("mouseout", hideTooltip);

      });
    }

    setupStates(states);
    addLegend();

    d3.json('elections.json', elections);
    d3.json('early_vote.json', earlyVotes);
    d3.json('deadlines.json', deadlines);
  }

  document.addEventListener("DOMContentLoaded", go);

})();
