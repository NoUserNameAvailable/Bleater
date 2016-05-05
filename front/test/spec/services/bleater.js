'use strict';

describe('Service: bleater', function () {

  // load the service's module
  beforeEach(module('bleaterApp'));

  // instantiate service
  var bleater;
  beforeEach(inject(function (_bleater_) {
    bleater = _bleater_;
  }));

  it('should do something', function () {
    expect(!!bleater).toBe(true);
  });

});
