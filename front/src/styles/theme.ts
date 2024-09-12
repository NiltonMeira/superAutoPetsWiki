import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        success: {
            main: "#00FF00"
        },
        background: {
            default: "#41414a",
            paper: "#292929" //used to AppBar backgound
        },

        primary: {
            main: "#f6bd20"
        },
        secondary: {
            main: "#A42CD6"
        },
        text: {
            primary: "#FFFFFF"
        }

    },

})

export default theme;