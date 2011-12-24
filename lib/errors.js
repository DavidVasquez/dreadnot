var util = require('util');


function DreadnotError(msg) {
  Error.call(this);
  Error.captureStackTrace(this, this.constructor);
  this.message = msg;
  this.name = 'DreadnotError';
  this.title = 'Error';
}

util.inherits(DreadnotError, Error);



function NotFoundError(msg) {
  DreadnotError.call(this, msg || 'Requested resource not found');
  this.name = 'NotFoundError';
  this.title = 'Not Found';
}

util.inherits(NotFoundError, DreadnotError);



function StackLockedError(deployment) {
  DreadnotError.call('Stack Locked');
  this.name = 'StackLockedError';
  this.title = 'Stack Locked';
  this.deployment = deployment;
}

util.inherits(StackLockedError, DreadnotError);


exports.DreadnotError = DreadnotError;
exports.NotFoundError = NotFoundError;
exports.StackLockedError = StackLockedError;