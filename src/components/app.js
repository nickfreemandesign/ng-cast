angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'ctrl'
})


.controller('ctrl', function($scope) {

  this.searchResults = function() {};
  this.selectVideo = function() {};
  this.currentVideo = window.exampleVideoData[0];
  this.videos = window.exampleVideoData;

});
