function ControllerHelper(){}

ControllerHelper.prototype.createPassThroughMethods = function(methods, ctrl, svc){
  methods.forEach(function(method){
    ctrl[method] = svc[method].bind(svc);
  });
};

module.exports = [ControllerHelper];
