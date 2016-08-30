import angular from 'angular';
import volumeSliderComponent from './volume-slider-component';

export default angular.module('nodeRemote.volume', [])
  .component('volumeSlider', volumeSliderComponent)
