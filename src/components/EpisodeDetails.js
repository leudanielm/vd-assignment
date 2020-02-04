import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowIcon from '@material-ui/icons/ArrowBack'
import { Link } from 'react-router-dom';

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
  titleContent: {
    flex: 1,
  }
});

class EpisodeDetails extends React.Component {
  componentDidMount() {
    const { match: { params }, moviesStore } = this.props;
    moviesStore.getEpisodeDetails(params.id);
  }

  render() {
    const { classes, moviesStore: { episodeDetails } } = this.props;

    if (!episodeDetails.data) {
      return null;
    }

    return (<div className={classes.root}>
      <Typography className={classes.title}>
        <Link to="/" title="Back to the show details">
          <IconButton aria-label="go back">
            <ArrowIcon />
          </IconButton>
        </Link>
        <span className={classes.titleContent}>{episodeDetails.data.name}</span>
      </Typography>
      <div className={classes.container}>
        <img className={classes.image} src={episodeDetails.data.image.original} alt="showimg" />
        <span dangerouslySetInnerHTML={{
          __html: episodeDetails.data.summary
        }} className={classes.description}></span>
      </div>
    </div>);
  }
}

export default compose(
  withStyles(styles),
  inject('moviesStore'),
  observer,
)(EpisodeDetails);

