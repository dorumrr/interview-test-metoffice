import { MonthConverterPipe } from './month-converter.pipe';

describe('MonthConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new MonthConverterPipe();
    expect(pipe).toBeTruthy();
  });

  it(`1 should be January`, () => {
    const pipe = new MonthConverterPipe();
    expect(pipe.transform(1)).toBe('January');
  });

  it(`12 should be December`, () => {
    const pipe = new MonthConverterPipe();
    expect(pipe.transform(12)).toBe('December');
  });

});
