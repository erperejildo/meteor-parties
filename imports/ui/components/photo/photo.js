import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './photo.html';

const name = 'photo';

class Photo {
  constructor($scope, $reactive) {
    'ngInject';
    $reactive(this).attach($scope);

    this.img = new Image();
    // enable Cross Origin Image Editing
    this.img.crossOrigin = '';

    this.step = 1;
    this.editing = false;




    /*this.myCroppedImage='';
    this.myImage= '';

    this.blockingObject = {block:true};*/
    
  }

  /*handleFileSelect(evt) {
    console.log(evt);
          this.file=evt.currentTarget.files[0];
          this.reader = new FileReader();
          this.reader.onload = function (evt) {
            //this.apply(function(this){
              this.myImage=evt.target.result;
            //});
          };
          this.reader.readAsDataURL(this.file);
        };*/









  // selects image from gallery
  openGallery() {
    var that = this;
    if (Meteor.isCordova) {
      /*window.imagePicker.getPictures(
        function(results) {
          if (results.length > 0) {
            for (var i = 0; i < results.length; i++) {
              console.log('Image URI: ' + results[i]);
            }
            that.editing = true;
            // add img to crop
            that.addSrc(results[0]);
            that.editPicture();
          }
        }, function (error) {
          //console.log('Error: ' + error);
        }, {
          maximumImagesCount: 1,
          width: 1000
        });*/

      var cameraOptions = {  
          quality: 100,
          correctOrientation: true,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      }

      MeteorCamera.getPicture(cameraOptions, function(error, localData){
          that.editing = true;
          // add img to crop
          that.addSrc(localData);
          that.editPicture();
      })
    }
  }

  addSrc(src) {
    this.ste3Src = src;
      //document.getElementById('originalPicture').src = src;
      //img.src = src;
      if (this.editing) {
        this.editingSrc = src;

        this.apply('add', [1, 2], (err, result) => {
          this.result = result;
        });
      }
      this.createCanvas();
  }

  createCanvas() {
    // image for canvas loaded
    this.img.onload = function() {
      console.log('LOADED');
      // from camera
      if (!this.editing) {
        this.step = 2;
        //this.hideCamera();
      }
    };
  };

  editPicture() {
    // destroy it before
    if (this.edit) {
      this.edit.destroy();
    }

    var opts = {
      viewport: {
        width: 200,
        height: 200
      }
    };
    var args = {
      url: this.editingSrc
    };

    //this.edit = $('#editing-img').croppie(opts);
    //this.edit.bind(args);
  }

  goBack() {
      window.history.back();
    }
  }

// create a module
export default angular.module(name, [
  angularMeteor
  ]).component(name, {
    templateUrl,
    controllerAs: name,
    controller: Photo
  })
  .config(config);

  function config($stateProvider) {
    'ngInject';
    $stateProvider
    .state('photo', {
      url: '/photo',
      template: '<photo></photo>'
    });
  }
