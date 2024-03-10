// import React, { useState , useEffect } from 'react';
// import axios from 'axios';
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


// let uniqueNames = [...new Set(wallpaperList).map(d => d.collections)].join()
// var splitCollections = uniqueNames.split(',')
// var distinctCollections = uniq(splitCollections)

// const WallpapersComponent = () => {

// const previewQuality = React.useState(localStorage.getItem('previewQuality'))

// const [currentFilter, setCurrentFilter] = React.useState(localStorage.getItem('currentFilter') || distinctCollections[0])

// const[wallpapers,addWallpapers]=useState([])

//     useEffect(()=>{
//         loadWallpapers()
//     },[]);

//     const loadWallpapers = async()=>{
//         const result=await axios.get("http://localhost:8080/wallpapers")
//         addWallpapers(result.data)
//     }


// React.useEffect(() => {
//   localStorage.setItem('currentFilter', currentFilter)
// }, [currentFilter]);

// const [updateFilter,  setFilter ] = useState(currentFilter)
// const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container className={classes.gridList}>
//         <div className={classes.chipContainer}>{distinctCollections.map((item) => <Chip onClick={() => setFilter(item) & setCurrentFilter(item)} key={uuid()} label={item} className={classes.collectionChip} color={item === updateFilter ? 'primary' : 'secondary'} />)}</div>
//         {wallpapers.filter((tile) => tile.collections.includes(updateFilter)).map((tile) => (
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
import React, { useState, useEffect } from 'react';

const AllWallpapersComponent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the backend API
    fetch('http://localhost:8080/wallpapers')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="image-gallery">
        <div class="card" style="width: 18rem;">
        <img src="images.data" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{images.wallpapername}</h5>
          <h6 class="card-text">{images.authorname}</h6>
          <a href="#" class="btn btn-primary">View</a>
        </div>
      </div>
    </div>
  );
};

export default AllWallpapersComponent