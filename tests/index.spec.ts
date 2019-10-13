import industries from '../src/index';

describe('industries', function() {
  it(`should export an object of industries indexed by the industry name`, function() {
    expect(industries).toBeInstanceOf(Object);
  });
});
