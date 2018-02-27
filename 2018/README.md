# 2018

The DNC Technology Department has compiled various data relating to elections in 2018.  The following text enumerates 1) table-level descriptions and then 2) column-level descriptions.

* __state_reference__: this table contains all state-level related data, such as congressional districts, whether there is a U.S. Senate or gubernatorial election, types of voter registration, time zones, etc.
* __p2018_federal__:  this table contains all data associated with the primaries themselves, primarily the dates and types of primaries by political party
* __p2018_federal_vr__: this table contains all data associated with voter registration for the 2018 federal primary
* __p2018_federal_ev__: this table contains all data associated with voting prior to election day for the 2018 federal primary
* __p2018_federal_eday__: this table contains all election day-specific data regarding the 2018 federal primary
* __g2018_vr__: this table contains all the data associated with voter registration for the 2018 general election
* __g2018_ev__: this table contains all data associated with voting early / prior to election day for the 2018 general election
* __g2018_eday__: this table contains election day-specific data related to the 2018 general election
* __special_p2018_federal__: this table contains all data associated with special federal primary elections, primarily the dates and types of primaries by political party
* __special_p2018_state__: this table contains all data associated with special federal state elections, primarily the dates and types of primaries by political party
* __special_g2018_federal__: this table contains election day-specific data related to the 2018 special federal general elections
* __special_g2018_state__: this table contains election day-specific data related to the 2018 special state general elections

## state_reference

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| state_name | Full name for state, territory, etc. |
| is_state | boolean flag for whether locale is a state |
| total_cong_districts| int for total number of congressional seats in the state |
| senate_election_2018 | boolean for whether at least 1 U.S. Senate seat in the state will appear on the general election ballot |
| senate_elected_2018_incumbent_party | the political party of the current U.S. Senator whose seat is up for election in November; allowed values: 'democrat', 'republican', 'other' |
| senate_open_seat_2018 | boolean; if the current incumbent is, as of now, running for re-election, this is NOT considered an open seat |
| governor_election_2018 | boolean flag for whether the state's Governor's seat will appear on the general election ballot |
| current_governor_party | the political party of the current Governor whose seat is up for election in November; allowed values: 'democrat', 'republican', 'other'  |
| governor_open_seat_2018 | boolean; if the current incumbent is, as of now, running for re-election, this is NOT considered an open seat |
| automatic_vr | boolean flag for whether the state offers automatic voter registration |
| online_vr | boolean flag for whether the state offers online voter registration |
| same_day_vr | boolean flag for whether the state offers same day voter registration, defined here as the ability to register to vote and also cast a vote prior to election day |
| eday_vr | boolean flag for whether the state offers election day voter registration, defined here as the ability to register to vote and also cast a vote on election day |
| early_vote_in_person | boolean flag for whether the state offers some form of voting prior to election day via a personal appearance |
| in_person_absentee | boolean flag for whether the only form of voting prior to election day via personal appearance is at a single location per jurisdiction |
| early_vote_by_mail | boolean flag for whether the state allows for voting by mail prior to election day |
| early_vote_by_mail_fault | boolean flag for whether there are restrictions as to who can vote by mail prior to election day |
| perm_absentee | boolean flag for whether the state offers a permanent absentee option in which a voter can either elect (or will automatically receive) a mail ballot |
| election_calendar_url | the URL for the state's canonical calendar of election dates |
| eastern_tz_flag | boolean flag for whether this state is wholly or partly contained in the eastern time zone |
| central_tz_flag | boolean flag for whether this state is wholly or partly contained in the central time zone |
| mountain_tz_flag | boolean flag for whether this state is wholly or partly contained in the mountain time zone |
| pacific_tz_flag | boolean flag for whether this state is wholly or partly contained in the pacific time zone |
| alaska_tz_flag | boolean flag for whether this state is wholly or partly contained in the alaska time zone |
| hawaiian_tz_flag | boolean flag for whether this state is wholly or partly contained in the hawaiian time zone |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## p2018_federal

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| p2018_federal_election_date | date of the federal primary election |
| p2018_runoff_federal_election_date | date (if known) of the federal primary runoff election |
| p2018_federal_dem_election_type | the exact type of democratic primary to be conducted; allowed values: 'open', 'semi-open', 'semi-closed', 'closed', 'jungle' |
| p2018_federal_rep_election_type | the exact type of democratic primary to be conducted; allowed values: 'open', 'semi-open', 'semi-closed', 'closed', 'jungle' |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## p2018_federal_vr

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| p2018_federal_vr_deadline | the deadline by which voters in the state must register to vote in order to vote in the 2018 federal primary |
| p2018_federal_online_vr_deadline | the explicit deadline by which voters in the state must register to vote online in order to vote in the 2018 federal primary |
| p2018_federal_runoff_vr_deadline | the deadline by which voters in the state must register to vote in order to vote in the 2018 federal primary runoff |
| p2018_federal_runoff_online_vr_deadline | the explicit deadline by which voters in the state must register to vote online in order to vote in the 2018 federal primary runoff |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |


## p2018_federal_ev

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| p2018_federal_federal_evip_start_date | the date in which early voting in person begins in the state |
| p2018_federal_evip_close_date | the date that early voting in person ends in the state |
| p2018_federal_vbm_application_deadline | the date by which voters must return their applications applying to vote by mail for the 2018 federal primary |
| p2018_federal_ballot_return_date | the date by which voters must return their ballots for the 2018 federal primary |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## p2018_federal_eday

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| polls_open | time at which polls open |
| polls_close | time at which polls close |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## g2018_vr

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| g2018_vr_deadline | the deadline by which voters in the state must register to vote in order to vote in the 2018 general election |
| g2018_online_vr_deadline | the explicit deadline by which voters in the state must register to vote online in order to vote in the 2018 general election |
| g2018_runoff_vr_deadline | the deadline by which voters in the state must register to vote in order to vote in the 2018 general election runoff |
| g2018_runoff_online_vr_deadline | the explicit deadline by which voters in the state must register to vote online in order to vote in the 2018 general election runoff |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## g2018_ev

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| g2018_evip_start_date | the date in which early voting in person begins in the state |
| g2018_evip_close_date | the date that early voting in person ends in the state |
| g2018_vbm_application_deadline | the date by which voters must return their applications applying to vote by mail for the 2018 general election |
| g2018_ballot_return_date | the date by which voters must return their ballots for the 2018 general election |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## g2018_eday

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| polls_open | time at which polls open |
| polls_close | time at which polls close |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## special_p2018_federal

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| district_type | type of district; allowed values: 'U.S. Senate', 'U.S. Senate' |
| district | the district number, or state_code if U.S. Senate |
| special_p2018_federal_election_date | date (if known) of the special federal primary election |
| special_p2018_federal_runoff_election_date | date (if known) of the special federal primary runoff election | 
| dem_election_type | the exact type of democratic special federal primary to be conducted; allowed values: 'open', 'semi-open', 'semi-closed', 'closed', 'jungle' |
| rep_election_type | the exact type of republican special federal primary to be conducted; allowed values: 'open', 'semi-open', 'semi-closed', 'closed', 'jungle' |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## special_p2018_state

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| district_type | type of district; allowed values: 'upper', 'lower', 'unicameral' |
| district | the district number or district string |
| special_p2018_state_election_date | date (if known) of the special state primary election |
| special_p2018_state_runoff_election_date | date (if known) of the special state primary runoff election | 
| dem_election_type | the exact type of democratic special state primary to be conducted; allowed values: 'open', 'semi-open', 'semi-closed', 'closed', 'jungle' |
| rep_election_type | the exact type of republican special state primary to be conducted; allowed values: 'open', 'semi-open', 'semi-closed', 'closed', 'jungle' |
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## special_g2018_federal

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| district_type | type of district; allowed values: 'U.S. Senate', 'U.S. Senate' |
| district | the district number, or state_code if U.S. Senate |
| special_g2018_federal_election_date | date (if known) of the special federal general election |
| special_g2018_federal_runoff_election_date | date (if known) of the special federal general runoff election | 
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |

## special_g2018_state

| column | description |
| :--- |:---|
| state_code | Two-letter abbreviation for state, territory, etc. |
| district_type | type of district; allowed values: 'upper', 'lower', 'unicameral' |
| district | the district number or district string |
| special_g2018_state_election_date | date (if known) of the special state general election |
| special_g2018_state_runoff_election_date | date (if known) of the special state general runoff election | 
| notes | additional helpful information that further explains any of the columns contained within this particular dataset |