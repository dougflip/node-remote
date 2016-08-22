import angular from 'angular';
import mousepadMod from './mousepad/mousepad';

export default angular.module('nodeRemote.modules', [
  mousepadMod.name
]);
