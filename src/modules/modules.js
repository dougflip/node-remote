import angular from 'angular';
import mousepadMod from './mousepad/mousepad';
import appComponent from './app-component';

export default angular.module('nodeRemote.modules', [
  mousepadMod.name
]).component('app', appComponent);
