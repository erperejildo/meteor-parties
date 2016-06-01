import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './partyRsvpsList.html';

class PartyRsvpsList { }

const name = 'partyRsvpsList';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  templateUrl,
  controllerAs: name,
  bindings: {
    rsvps: '<'
  },
  controller: PartyRsvpsList
});