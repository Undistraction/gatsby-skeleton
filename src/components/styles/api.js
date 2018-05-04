import createApi from 'cssapi'
import globalStyles from './globalStyles'

// -----------------------------------------------------------------------------
// Define Breakpoints
// -----------------------------------------------------------------------------

const breakpoints = [
  [`smallUp`, 400], // 400–900
  [`mediumUp`, 900], // 900–1100
  [`largeUp`, 1100], // 1100–
]

// -----------------------------------------------------------------------------
// Configure CSS API
// -----------------------------------------------------------------------------

const rhythm = 28

const config = {
  breakpoints,
  data: {
    rhythm,
    baseline: {
      lineHeight: rhythm, // Baseline height
    },
    color: {
      black: `#070707`,
      offBlack: `#222`,
      white: `#F5F5F5`,
      offWhite: `#D8D8D8`,
      grey: `#AAA`,
      bg: `c:white`,
      text: `c:black`,
      highlight: `c:grey`,
      disabled: `c:offWhite`,
    },
    scale: {
      smallprint: `14`,
      body: `18`,
      secondaryTitle: `20`,
      primaryTitle: `28`,
      megaTitle: `32`,
      giant: `80`,
    },
    font: {
      default: `Cousine, monospace`,
      title: `Berkshire Swash, cursive`,
    },
    gradient: {
      background: `linear-gradient(to bottom, c:white 25%, c:offWhite)`,
      backgroundInverted: `linear-gradient(to bottom, c:black, c:offBlack)`,
    },
  },
}

const api = createApi(config)

// -----------------------------------------------------------------------------
// Global Styles
// -----------------------------------------------------------------------------

globalStyles(api)

// -----------------------------------------------------------------------------
// Export Theme
// -----------------------------------------------------------------------------

export default api
