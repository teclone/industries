import industries from '../src/index';

describe('industries', function() {
  it(`should export an array of industries`, function() {
    expect(industries).toBeInstanceOf(Array);
  });
});
