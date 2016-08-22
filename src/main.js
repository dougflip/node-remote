import angular from 'angular';
import nodeRemoteMods from './modules/modules';


const nodeRemoteModule = angular.module('nodeRemote', [
  nodeRemoteMods.name
]);

document.querySelector('.menu-button').addEventListener('click', () => {
  document.body.classList.add('app-menu-is-open');
});

document.querySelector('.app-menu-overlay').addEventListener('click', evt => {
  document.body.classList.remove('app-menu-is-open');
});
