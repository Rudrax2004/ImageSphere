module.exports = { 
    AppName : 'Image$phere',
    AppVersion : 'v1', 
    primaryTheme : 'dark',
    

    // WALLPAPER LIST STYLING
    wallpaperBorderRadius: 8,
    wallpaperMargin: 4,
    
    // DARK THEME COLORS
    primaryAccentDark: '#65dbff',
    primaryAccentTextDark: '#000000',
    secondaryAccentDark: '#ffffff',
    secondaryAccentTextDark: '#000000',
    backgroundDark: '#121212',
    themeDark: '#121212', //Keep this as close to the background, if not same
    

    // LIGHT THEME COLORS
    primaryAccentLight: '#65dbff',
    primaryAccentTextLight: '#ffffff',
    secondaryAccentLight: '#000000',
    secondaryAccentTextLight: '#ffffff',
    backgroundLight: '#ffffff',
    themeLight: '#ffffff', //Keep this as close to the background, if not same

    resolve: {
        fallback: {
          path: require.resolve("path-browserify"),
        },
      },
};
// Edit Team Info in the TeamConfig.js file
// and Wallpapers Data in components/AllWallpapers/wallpaperList file
// Also update the ../public/manifest.json and index.html files accordingly. That's it. :x