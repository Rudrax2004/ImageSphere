import { createTheme } from '@material-ui/core/styles';
import { primaryAccentLight, primaryAccentTextLight, secondaryAccentLight, secondaryAccentTextLight, backgroundLight, themeLight } from '../AppConfig';

// Normal or default theme
const theme = createTheme({
  palette: {
    primary: {
      main: primaryAccentLight,
      contrastText: primaryAccentTextLight
    },
    secondary: {
      main: secondaryAccentTextLight,
      contrastText: secondaryAccentLight
    },
    background: {
      default: backgroundLight,
      paper: themeLight
    }
  }
})

export default theme;