import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: "#FFFFFF",
            paper: "#4bbaef" //used to AppBar backgound
        },

        primary: {
            main: "#fe5900" //ORANGE.
        },
        secondary: {
            main: "#53b00a" //green
        },
        

    },

})

export default theme;