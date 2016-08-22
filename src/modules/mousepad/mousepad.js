import angular from 'angular';
import mousepadComponent from './mousepad-component';

export default angular.module('nodeRemote.mousepad', [])
  .component('mousepad', mousepadComponent);
