import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ScrollToTop from './ScrollToTop';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

function HeaderAppBar(props) {
  return (
    <div id='header'>
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="transparent" position="absolute">
          <Toolbar variant="dense" style={{width: '100%'}}>
            <Typography variant="h5" style={{color:'#65dbff'}}>Image🌐Sphere</Typography>
            <ScrollToTop />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
    </div>
  );
}
export default HeaderAppBar;