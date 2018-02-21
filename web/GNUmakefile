files := all.json cleaned.json dates.json early_vote.json elections.json deadlines.json


all: $(files)

all.json:
	(cd ..; ./export | jq .) > $@

cleaned.json: all.json
	./cleaned > $@

dates.json: cleaned.json
	jq '[ to_entries[] | { state: .key, date: (.value | to_entries)[] } | { state: .state, label: .date.key, date: .date.value }]' $< > $@

early_vote.json: cleaned.json
	./early_vote > $@

elections.json: dates.json
	jq '[ .[] | select(.label | test("_election")) ]' $< > $@

deadlines.json: dates.json
	jq '[ .[] | select(.label | test("_election") | not) ]' $< > $@

tidy:
	rm -f *~

clean: tidy
	rm -f $(files)
