import { observable, action, decorate } from 'mobx';

export default class DataFetcher {
  loading = false;
  data = null;
  error = null;
  loader = () => { };

  setLoader(loaderCallback) {
    this.loader = loaderCallback;
  }

  async load() {
    this.setLoad(true);
    try {
      this.setData(await this.loader());
    } catch (error) {
      this.setError(error);
    } finally {
      this.setLoad(false);
    }
  }

  setData(data) {
    this.data = data;
  }

  setLoad(isLoading) {
    this.loading = isLoading;
  }

  setError(error) {
    this.error = error;
  }
}

decorate(DataFetcher, {
  loading: observable,
  data: observable,
  error: observable,
  setLoader: action,
  load: action,
  setLoad: action,
  setError: action,
  setData: action,
});