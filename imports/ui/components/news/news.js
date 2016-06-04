import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './news.html';

class News {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.helpers({
      /*mainImage() {
        const images = this.getReactively('images', true);
        if (images) {
          return Images.findOne({
            _id: images[0]
          });
        }
      }*/
    });
  }
}

const name = 'news';

// create a module
export default angular.module(name, [
  angularMeteor
  ]).component(name, {
    templateUrl,
    controllerAs: name,
    controller: News
  })
  .config(config);

  function config($stateProvider) {
    'ngInject';
    $stateProvider
    .state('news', {
      url: '/news',
      template: '<news></news>'
    });
  }
