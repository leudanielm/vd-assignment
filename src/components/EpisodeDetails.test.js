import React from 'react';
import EpisodeDetails from './EpisodeDetails';
import { mount, shallow } from 'enzyme';

describe('components/EpisodeDetails', () => {
  it('calls getEpisodeDetails from the store on mounting', () => {
    const store = { getEpisodeDetails: jest.fn(), episodeDetails: {} };
    const match = { params: { id: 1 } };
    mount(<EpisodeDetails moviesStore={store} match={match} />);
    expect(store.getEpisodeDetails).toHaveBeenCalledWith(1);
  });

  it('renders null when theres no data', () => {
    const store = { getEpisodeDetails: jest.fn(), episodeDetails: {} };
    const match = { params: { id: 1 } };
    const wrapper = shallow(<EpisodeDetails moviesStore={store} match={match} />);
    expect(wrapper.children().length).toBe(0);
  });
});
