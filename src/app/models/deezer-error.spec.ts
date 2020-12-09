import { DeezerError } from './deezer-error';

describe('DeezerError', () => {
  it('should create an instance', () => {
    expect(new DeezerError()).toBeTruthy();
  });
});
