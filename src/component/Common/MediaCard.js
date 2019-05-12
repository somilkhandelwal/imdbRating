import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height:300,
    width:300
  },
};

function MediaCard(props) {
  const { classes, item: {Poster, Title,Type, imdbID, Year}, onSelect } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={()=> onSelect(imdbID)} >
        <CardMedia
          className={classes.media}
          image={Poster}
          title={Title}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            {`Name : ${Title}`}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            {`Year : ${Year}`}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            {`imdbID : ${imdbID}`}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            {`Type : ${Type}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object,
  onSelect: PropTypes.func.isRequired
};
MediaCard.defaultProps = {
    item: null
  };
  
export default withStyles(styles)(MediaCard);