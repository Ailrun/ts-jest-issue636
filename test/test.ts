import { hi } from '../src';

describe('hi', () => {
  it('should say hi', () => {
    expect(hi()).toMatch(/HI/);
  });
});
