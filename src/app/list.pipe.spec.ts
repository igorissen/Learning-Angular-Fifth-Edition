import { ListPipe } from './list.pipe';

describe('ListPipe', () => {
  it('creates an instance', () => {
    const pipe = new ListPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns an array', () => {
    const pipe = new ListPipe();
    expect(pipe.transform('A,B,C')).toEqual(['A', 'B', 'C']);
  });
});
