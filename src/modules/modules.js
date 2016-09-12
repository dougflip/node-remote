import angular from 'angular';
import mousepadMod from './mousepad/mousepad';
import volumeMod from './volume/volume';
import appComponent from './app-component';
import nodeRemoteCoreApi from './node-remote-core-api';

export default angular.module('nodeRemote.modules', [
  mousepadMod.name,
  volumeMod.name
])
  .factory('nodeRemoteCoreApi', nodeRemoteCoreApi)
  .component('app', appComponent);
