import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ArrowIcon from '@material-ui/icons/ArrowForward'
import { compose } from 'recompose';

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
  episodesContainer: {
  },
  card: {
    width: '100%',
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    justifyContent: 'flex-end',
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
      {showEpisodes.data && <div className={classes.episodesContainer}>
        {showEpisodes.data.map(episode => episode.image && (
          <Card className={classes.card}>
            <CardHeader title={episode.name} />
            <CardMedia className={classes.media} image={episode.image.medium} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <span dangerouslySetInnerHTML={{
                  __html: episode.summary
                }}></span>
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
              <IconButton aria-label="see details">
                <ArrowIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>}
    </div>);
  }
}

export default compose(
  withStyles(styles),
  inject('moviesStore'),
  observer
)(ShowDetails);
