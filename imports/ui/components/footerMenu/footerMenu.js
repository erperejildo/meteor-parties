import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './footerMenu.html';

class FooterMenu {
	constructor($scope, $reactive, $rootScope) {
		'ngInject';
		$reactive(this).attach($scope);
	}

	getPath() {
		return this.path;
	}
}

const name = 'footerMenu';

// create a module
export default angular.module(name, [
	angularMeteor
	]).component(name, {
		bindings: {
      		path: '@'
	    },
		templateUrl,
		controllerAs: name,
		controller: FooterMenu
	});
    
