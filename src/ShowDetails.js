import React from 'react';
import { inject, observer } from 'mobx-react';

class ShowDetails extends React.Component {
  componentDidMount() {
    this.props.moviesStore.getShowDetails();
  }

  render() {
    const { showDetails } = this.props.moviesStore;
    if (showDetails.data) {
      return <span>{showDetails.data.id}</span>;
    }
    return null;
  }
}

export default inject('moviesStore')(observer(ShowDetails));