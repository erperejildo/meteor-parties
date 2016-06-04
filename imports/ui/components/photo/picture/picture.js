import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './picture.html';

const name = 'picture';

class Picture {
	constructor($scope, $reactive, $rootScope) {
    'ngInject';
    $reactive(this).attach($scope);
  }

  takePicture() {
    console.log('takePicture');
  }
}

// create a module
export default angular.module(name, [
	angularMeteor
	]).component(name, {
		templateUrl,
		controllerAs: name,
		controller: Picture
	});
    
