var Relay = require('react-relay');

module.exports = function(spec) {
  return function(Component) {
    return Relay.createContainer(Component, spec)
  }
};
