files := all.json cleaned.json dates.json early_vote.json elections.json deadlines.json


all: $(files)

all.json:
	(cd ..; ./export | jq .) > $@

cleaned.json: all.json
	./cleaned > $@

dates.json: cleaned.json
	jq '[ to_entries[] | { state: .key, date: (.value | to_entries)[] } | { state: .state, label: .date.key, date: .date.value }]' $< > $@

elections.json: dates.json
	jq '[ .[] | select(.label | test("_election")) ]' $< > $@

deadlines.json: cleaned.json
	./deadlines $< > $@

early_vote.json: cleaned.json
	jq '[ to_entries[] | \
		{ state: .key, type: "general", start: .value.general_early_vote_in_person_start, end: .value.general_early_vote_in_person_close }, \
		{ state: .key, type: "federal_primary", start: .value.federal_primary_early_vote_in_person_start, end: .value.federal_primary_early_vote_in_person_close } | \
		select(.start) | select(.start < "2018-11-06") ]' $< > $@

tidy:
	rm -f *~

clean: tidy
	rm -f $(files)
