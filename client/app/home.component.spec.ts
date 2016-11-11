import { HomeComponent } from "./home.component";

describe('universal truths', () => {
  it('should do math', () => {
    expect(5).toBeGreaterThan(4);
  });

  xit('should skip this', () => {
    expect(4).toEqual(40);
  });
});
