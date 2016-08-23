import angular from 'angular';
import hammerjs from 'hammerjs';
import hmTouchEvents from 'angular-hammer';
import nodeRemoteMods from './modules/modules';

const nodeRemoteModule = angular.module('nodeRemote', [
  'hmTouchEvents',
  nodeRemoteMods.name
]).constant('API_URL', API_URL);
