import ComputeService from '../src/services/compute';

describe('ComputeService', () => {
  it('should add two numbers', () => {
    const added = ComputeService.Add(1, 2);
    expect(added).toBe(3);
  });
});
