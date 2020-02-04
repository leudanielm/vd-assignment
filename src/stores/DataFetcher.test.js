import DataFetcher from './DataFetcher';

describe('stores/DataFetcher', () => {
  const df = new DataFetcher();
  it('should set data for successful calls', async () => {
    df.setLoader(() => Promise.resolve(1));
    await df.load();
    expect(df.data).toEqual(1);
  });

  it('should set an error for failed calls', async () => {
    df.setLoader(() => {
      throw new Error('API Exception');
    });
    await df.load();
    expect(df.error.message).toEqual('API Exception');
  });
});