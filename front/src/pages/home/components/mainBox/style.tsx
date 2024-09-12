import { Box, styled } from "@mui/material";

export const SMainBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100vw",
    height: "100vh",
    
    padding: "25px",

    backgroundImage:'url("/images/background.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%"
}))

