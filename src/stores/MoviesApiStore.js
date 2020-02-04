import { observable, action } from 'mobx';
import fetch from '../services/fetch';
import DataFetcher from './DataFetcher';

export default class MoviesApiStore {
  BASE_URL = 'http://api.tvmaze.com/';
  POWERPUFF_SHOW_URL = 'shows/6771';

  @observable showDetails = new DataFetcher();
  @observable episodeDetails = new DataFetcher();

  @action
  async getShowDetails() {
    const loader = async () => await fetch(`${this.BASE_URL}${this.POWERPUFF_SHOW_URL}`);
    this.showDetails.setLoader(loader);
    await this.showDetails.load();
  }
}