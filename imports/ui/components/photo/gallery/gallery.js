import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './gallery.html';

const name = 'gallery';

class Gallery {
  openGallery() {
    console.log('open gallery');
  }
}

// create a module
export default angular.module(name, [
  angularMeteor
  ]).component(name, {
    templateUrl,
    controllerAs: name,
    controller: Gallery
  });