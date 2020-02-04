import fetch from './fetch';

describe('services/fetch', () => {
  it('should call window fetch and return a json', async () => {
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json() { return Promise.resolve({ id: 1 }) },
      });
    });

    const data = await fetch('https://some-url');
    expect(data).toEqual({ id: 1 });
    expect(window.fetch).toHaveBeenCalledWith('https://some-url');
  });
});
