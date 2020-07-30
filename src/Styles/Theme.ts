export const staticTheme = {
  staticColors: {
    white: '#fff'
  }
}

export const lightTheme = {
  colors: {
    primary: '#8338ec',
    secondary: '#3a86ff',
    black: '#000',
    white: '#fff',
    primaryToBlack: '#8338ec'
  },
  ...staticTheme
}

export const darkTheme = {
  colors: {
    primary: '#b991f3',
    primaryToBlack: '#323232',
    secondary: '#93caff',
    black: '#fff',
    white: '#323232',
  },
  ...staticTheme
}
