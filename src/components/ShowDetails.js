import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { compose } from 'recompose';

import ShowEpisodes from './ShowEpisodes';

const styles = ({
  root: {
    marginTop: '50px',
    marginBottom: '50px',
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: 25,
  },
  image: {
    height: 200,
    flexGrow: 1,
    borderRadius: 5,
  },
  container: {
    display: 'flex',
    flexGrow: 1,
  },
  description: {
    paddingLeft: 10,
  },
});

class ShowDetails extends React.Component {
  componentDidMount() {
    this.props.moviesStore.getShowDetails();
    this.props.moviesStore.getShowEpisodes(6771);
  }

  render() {
    const { classes } = this.props;
    const { showDetails, showEpisodes } = this.props.moviesStore;

    if (!showDetails.data) {
      return null;
    }

    return (<div className={classes.root}>
      <Typography className={classes.title}>{showDetails.data.name}</Typography>
      <div className={classes.container}>
        <img className={classes.image} src={showDetails.data.image.original} alt="showimg" />
        <span dangerouslySetInnerHTML={{
          __html: showDetails.data.summary
        }} className={classes.description}></span>
      </div>
      <Typography className={classes.title}>Episodes:</Typography>
      {showEpisodes.data && <ShowEpisodes episodes={showEpisodes.data} />}
    </div>);
  }
}

export default compose(
  withStyles(styles),
  inject('moviesStore'),
  observer
)(ShowDetails);
