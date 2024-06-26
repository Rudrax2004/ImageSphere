import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DashboardIcon from '@material-ui/icons/DashboardTwoTone';
import InfoIcon from '@material-ui/icons/InfoTwoTone';
import UploadIcon from '@material-ui/icons/CloudUploadTwoTone';
import UserIcon from '@material-ui/icons/AccountCircleTwoTone';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
});

const currDir = window.location.pathname.slice(1);

function BottomNavigationBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(currDir ? currDir : 'home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <BottomNavigation value={value} onChange={handleChange} className={classes.root} color="transparent" position="absolute">
      <BottomNavigationAction component={Link} to="/" label="Wallpapers" value="home" icon={<DashboardIcon />} />
      <BottomNavigationAction component={Link} to="/info" label="Info" value="info" icon={<InfoIcon />} />
      <BottomNavigationAction component={Link} to="/upload" label="Upload" value="upload" icon={<UploadIcon />} />
      <BottomNavigationAction component={Link} to="/account" label="Account" value="user" icon={< UserIcon/>} />
    </BottomNavigation>
    </>
  );
}

export default BottomNavigationBar;