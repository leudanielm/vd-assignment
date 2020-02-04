import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ArrowIcon from '@material-ui/icons/ArrowForward'
import { withRouter } from 'react-router-dom';

const styles = ({
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

function ShowEpisodes({ classes, history, episodes }) {

  function gotoEpisode(id) {
    history.replace(`/episode/${id}`);
  }

  return (
    <div className={classes.episodesContainer}>
      {episodes.map(episode => episode.image && (
        <Card key={episode.id} className={classes.card}>
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
            <IconButton onClick={() => gotoEpisode(episode.id)} aria-label="see details">
              <ArrowIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default withRouter(withStyles(styles)(ShowEpisodes));
