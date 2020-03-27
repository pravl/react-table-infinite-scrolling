
const BASE_SIZE = 8

// TODO: prefer named map
const space = [
  BASE_SIZE * 0,
  BASE_SIZE * 0.25,
  BASE_SIZE * 0.5,
  BASE_SIZE * 1,
  BASE_SIZE * 2,
  BASE_SIZE * 3,
  BASE_SIZE * 4,
  BASE_SIZE * 5,
  BASE_SIZE * 6,
]

const fontSizes = {
    md: "0.926rem"
}

const fonts = {
    hint: "gilory"
}

export const styles = {
    root: {
      fontFamily: "gilory",
      fontWeight: "normal",
    },
  }

const breakpoints = ["40em", "52em", "64em"]

const responsive = {
  breakpoints,
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
  },
}

const borders = {
    borderWidth: [0, 1, 2, 4, 8],
    radii: {
      xs: 3,
      sm: BASE_SIZE * 0.25,
      md: BASE_SIZE * 0.5,
      lg: BASE_SIZE * 2,
      default: BASE_SIZE * 1.25,
      circle: 99999,
    },
  }


const elevation = {
    shadows: {
      box: "0px 1px 1px rgba(55, 99, 122, 0.2)",
      nav: "0px 2px 4px rgba(55, 99, 122, 0.2)",
      notification: "0px 4px 8px rgba(55, 99, 122, 0.2)",
      temp: "0px 1px 3px rgba(55, 99, 122, 0.2)",
    },
    zIndices: [-1, 0, 1, 2, 3, 4, 5],
  }

const colors = {
    body: "#FFFFFF",
    bg: "##e0e0e0",
    primary: "blue",
    oddRow: "#fafafa"
}

const weights = {
    normal: 500,
    bold: 600,
    bolder: 700,
  }
  
  export const fontWeights = {
    ...weights,
    body: weights.normal,
    button: weights.bold,
    heading: weights.bolder,
  }

export const theme = {
     colors,
     space,
     fontSizes,
     ...fonts,
     ...elevation,
     ...borders,
     ...responsive,
     ...fontWeights,
     ...styles,
  }