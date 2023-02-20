import { Montserrat } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin-ext"],
  display: "swap",
  fallback: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontSize: 48,
      fontWeight: 900,
    },
    h2: {
      fontSize: 32,
      fontWeight: 900,
    },
    h3: {
      fontSize: 28,
      fontWeight: 900,
    },
    body1: {
      fontSize: 16,
    },
  },
});

export default theme;
