import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import templateUrl from './socially.html';
import { name as PartiesList } from '../partiesList/partiesList';
import { name as PartyDetails } from '../partyDetails/partyDetails';
import { name as Navigation } from '../navigation/navigation';
import { name as Auth } from '../auth/auth';
import { name as News } from '../news/news';
import { name as Photo } from '../photo/photo';
import { name as Footer } from '../footerMenu/footerMenu';

class Socially {
  constructor($scope, $reactive, $rootScope) {
    'ngInject';
    $reactive(this).attach($scope);

    this.currentPath = false;

    // control over path changes
    $rootScope.$on('$stateChangeSuccess', 
    (event, toState, toParams, fromState, fromParams, error) => {
      this.currentPath = (toState.url).replace('/', '');
    });
  }
}
const name = 'socially';

// create a module
export default angular.module(name, [
  angularMeteor,
  uiRouter,
  PartiesList,
  PartyDetails,
  Navigation,
  Auth,
  News,
  Photo,
  Footer,
  'accounts.ui'
  ]).component(name, {
    templateUrl,
    controllerAs: name,
    controller: Socially
  })
  .config(config)
  .run(run);

  function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/news');
  }

  function run($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError',
      (event, toState, toParams, fromState, fromParams, error) => {
        if (error === 'AUTH_REQUIRED') {
          $state.go('parties');
        }
      }
      );
  }
