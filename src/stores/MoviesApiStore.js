import { observable, action, decorate } from 'mobx';
import fetch from '../services/fetch';
import DataFetcher from './DataFetcher';

export class MoviesApiStore {
  BASE_URL = 'http://api.tvmaze.com/';
  POWERPUFF_SHOW_URL = 'shows/6771';

  showDetails = new DataFetcher();
  episodeDetails = new DataFetcher();

  async getShowDetails() {
    const loader = async () => await fetch(`${this.BASE_URL}${this.POWERPUFF_SHOW_URL}`);
    this.showDetails.setLoader(loader);
    await this.showDetails.load();
  }
}

decorate(MoviesApiStore, {
  showDetails: observable,
  episodeDetails: observable,
  getShowDetails: action,
});

export default new MoviesApiStore();