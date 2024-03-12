// import React, { useState } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import Chip from '@material-ui/core/Chip';
// import CardContent from '@material-ui/core/CardContent';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import wallpaperList from './wallpaperList';
// import uuid from 'react-uuid';
// import { wallpaperMargin, wallpaperBorderRadius } from '../../AppConfig';

// var uniq = require('lodash.uniq');

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//     paddingBottom: '120px',
//     margin: wallpaperMargin+'px',
//     marginTop: '-6px'
//   },
//   gridList: {
//     width: '100%',
//     height: '100%',
//   },
//   gridElement: {
//     width: 'auto',
//     height: '320px',
//     margin: wallpaperMargin+'px',
//     padding: '0px',
//     position: 'relative',
//     borderRadius: wallpaperBorderRadius+'px'
//   },
//   gridElementImage: {
//     width: '100%',
//     padding: '0px',
//     margin: '0px',
//     left: '0px',
//     height: '320px',
//     objectFit: 'cover'
//   },
//   gridListTileBar: {
//     background: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))',
//     width: '100%',
//     height: '100%',
//     textAlign: 'bottom',
//     position: 'absolute',
//     bottom: '0px'
//   },
//   gridListTileBarTitle: {
//     marginBottom: '24px',
//     bottom: '0px',
//     position: 'absolute',
//     whiteSpace: 'nowrap',
//     width: '80%',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis'
//   },
//   gridListTileBarSubtitle: {
//     color: 'rgba(255,255,255,0.75)',
//     bottom: '12px',
//     position: 'absolute',
//     whiteSpace: 'nowrap',
//     lineHeight: '1em',
//     width: '80%',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis'
//   },
//   chipContainer: {
//     width: '100vw',
//     overflow: 'auto',
//     scrollBehavior: 'smooth',
//     whiteSpace: 'nowrap',
//     padding: '6px',
//     scrollbarWidth: '2px'
//   },
//   collectionChip: {
//     margin: '8px',
//     paddingLeft: '8px',
//     paddingRight: '8px'
//   },
// }));


// let uniqueNames = [...new Set(wallpaperList.map(d => d.collections))].join()
// var splitCollections = uniqueNames.split(',')
// var distinctCollections = uniq(splitCollections)

// const WallpapersComponent = () => {

// const previewQuality = React.useState(localStorage.getItem('previewQuality'))

// const [currentFilter, setCurrentFilter] = React.useState(localStorage.getItem('currentFilter') || distinctCollections[0])


// React.useEffect(() => {
//   localStorage.setItem('currentFilter', currentFilter)
// }, [currentFilter]);

// const [updateFilter,  setFilter ] = useState(currentFilter)
// const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container className={classes.gridList}>
//         <div className={classes.chipContainer}>{distinctCollections.map((item) => <Chip onClick={() => setFilter(item) & setCurrentFilter(item)} key={uuid()} label={item} className={classes.collectionChip} color={item === updateFilter ? 'primary' : 'secondary'} />)}</div>
//         {wallpaperList.filter((tile) => tile.collections.includes(updateFilter)).map((tile) => (
//           <Grid item xs={6} sm={4} md={3} lg={2} key={tile.url} className="searchContent">
//             <Card align="center" className={classes.gridElement}>
//             <img src={tile.thumbnail} alt={tile.name} className={classes.gridElementImage} />
//             <CardContent component={Link} to={{ pathname: '/#/'+tile.name, state: { name: tile.name, url: tile.url, thumb: previewQuality[0] === 'true' ? tile.thumbnail : tile.url} }}>
//             <GridListTileBar
//               align={'left'}
//               className={classes.gridListTileBar}
//               title={<span className={classes.gridListTileBarTitle}>{tile.name}</span>}
//               subtitle={<span className={classes.gridListTileBarSubtitle}>{tile.author}</span>}
//             />
//             </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }




// export default withRouter(WallpapersComponent);





import React,{useEffect,useState} from 'react';
import {saveAs} from 'file-saver';
import  MyCard  from './MyCard.jsx';
import  './style.css';

const WallpapersComponent = () => {
  const [images, setImages] = useState([])


  // function handleDownloadClick(wallpapername) {
  //   // Assuming a download endpoint is available, adjust the URL accordingly
  //   const downloadUrl = `http://localhost:8080/wallpapers/db/${wallpapername}`;

  //   // Trigger download using an anchor tag
  //   const downloadLink = document.createElement('a');
  //   downloadLink.href = downloadUrl;
  //   downloadLink.download = `wallpaper_${wallpapername}.jpeg`;
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // }
  async function handleViewClick(imageName) {
    try {
      const downloadUrl = `http://localhost:8080/wallpapers/db/${imageName}`;
      saveAs(downloadUrl, 'imageName.png');
      // const blob = await response.blob();
      // const url = window.URL.createObjectURL(new Blob([blob]));
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', imageName);
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    } catch (error) {
      console.error('Error Opening an  image:', error);
    }
  }

  async function handleDownloadClick(imageName) {
    // try {
    //   blob= await fetch(`http://localhost:8080/wallpapers/db/${imageName}`).then(r => r.blob());
    //   const url = window.URL.createObjectURL(new Blob([blob]));
    //   const link = document.createElement('a');
    //   link.href = url;
    //   link.setAttribute('download', imageName);
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // } catch (error) {
    //   console.error('Error Opening an  image:', error);
    // }
  }
  

  useEffect(() => {
    fetch('http://localhost:8080/wallpapers')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  }, []);

 
  return (
    <div className="grid-list-bar">
      {images.map((image) => (

        // console.log(image.data)
        <MyCard
          key={image.id}
          image={`data:image/jpeg;base64,${image.data}`}
          title={image.wallpapername}
          author={image.authorname}
          handleDownloadClick={()=>handleDownloadClick(image.wallpapername)}
          handleViewClick={()=>handleViewClick(image.wallpapername)}
          
        />
        
        
      ))}
        
    </div>
  )
}

export default WallpapersComponent;