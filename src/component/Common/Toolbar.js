import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import actionTypes from '../../store/action/apiActions'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  }
});

class PrimarySearchAppBar extends React.Component {
    constructor(props, context){
        super(props, context);
        this.timeout=0;
        this.inputRef=React.createRef();
    }
inputHandler = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.notifyChange(this.inputRef.current.value), 250);
}
componentWillUnmount()
{
    clearTimeout(this.timeout);
}
notifyChange = (supposedValue) =>{
    const { current } = this.inputRef;
    const { filterQueryCall, loading } = this.props;
    if (supposedValue !== current.value) return;

    if (!current.value || current.value.trim() === '') {
      return;
    }

    const valueCopy = `${current.value}`;

      // block events if loading is in progress, async style
      if(loading)
      {
        setTimeout(() => {
            this.notifyChange(valueCopy);
          }, 150);
          return;
      }
     
      filterQueryCall({s:current.value,page:1})
      console.log(current.value);
}
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              IMDB Movie Rating
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                inputRef={this.inputRef}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onInput={this.inputHandler}
              />
            </div>
            <div className={classes.grow} />
                <Typography color="inherit">Somil</Typography>
                <IconButton><ArrowDropDown color="inherit" /></IconButton>
          </Toolbar>
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  filterQueryCall: PropTypes.func.isRequired,
  loading: PropTypes.bool
};
PrimarySearchAppBar.defaultProps = {
    loading:false
};

const mapStateToProps = state => {
    return {
        loading:state.apiReducer.loading
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        filterQueryCall: (e) => dispatch(actionTypes.filterQueryCall(e)),
    }
  }
  export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PrimarySearchAppBar));
