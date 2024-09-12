import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const SAppBar = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "25px",

    backgroundColor: theme.palette.background.paper,


}))

export const STitles = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "space-around",
    
    gap: "70px"
}))

export const SLogin = styled(Box)(({theme}) => ({
    display: "flex",
}))

export const Slink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
    transition: 1s;

    &:hover{
        color:#fe5900;
        transform: scale(1.5) rotate(18000deg);
    }
    
`

export const SImg = styled("img")`
    width: 150px;
`

export const SImgLogin = styled("img")`
    width: 80px
`