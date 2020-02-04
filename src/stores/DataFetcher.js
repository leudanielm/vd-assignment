import { observable, action } from 'mobx';

export default class DataFetcher {
  @observable loading = false;
  @observable data = null;
  @observable error = null;
  loader = () => { };

  @action
  setLoader(loaderCallback) {
    this.loader = this.loaderCallback;
  }

  @action
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
