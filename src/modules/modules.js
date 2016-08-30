import angular from 'angular';
import mousepadMod from './mousepad/mousepad';
import volumeMod from './volume/volume';
import appComponent from './app-component';

export default angular.module('nodeRemote.modules', [
  mousepadMod.name,
  volumeMod.name
]).component('app', appComponent);
