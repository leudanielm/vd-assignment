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
    this.loading = true;
    try {
      this.data = await this.loader();
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  }
}

decorate(DataFetcher, {
  loading: observable,
  data: observable,
  error: observable,
  setLoader: action,
  load: action,
});