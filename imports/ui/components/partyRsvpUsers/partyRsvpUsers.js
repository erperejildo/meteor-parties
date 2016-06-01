import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import { Meteor } from 'meteor/meteor';
 
import templateUrl from './partyRsvpUsers.html';
import { name as DisplayNameFilter } from '../../filters/displayNameFilter';
 
class PartyRsvpUsers {
  getUserById(userId) {
    return Meteor.users.findOne(userId);
  }
}
 
const name = 'partyRsvpUsers';
 
// create a module
export default angular.module(name, [
  angularMeteor,
  DisplayNameFilter
]).component(name, {
  templateUrl,
  controllerAs: name,
  bindings: {
    rsvps: '<',
    type: '@'
  },
  controller: PartyRsvpUsers
});