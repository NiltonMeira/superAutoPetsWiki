import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const SAppBar = styled(Box)`
    display: "flex";
    align-items: "center";
    justify-content: "space-between";

    padding: "25px";
    width: "100vw";
    position: "fixed";
    backdrop-filter: "blur(4px)";
`




export const STitles = styled(Box)`
    display: "flex";
    justify-content: "space-around";
    gap: "70px";
`

export const SLogin = styled(Box)`
    display: "flex",
`

export const Slink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
    transition: 0.5s;

    &:hover{
        color:#fe5900;
        transform: scale(1.1) rotate(18000deg);
    }

`

export const SImg = styled("img")`
    width: 150px;
`

export const SImgLogin = styled("img")`
    width: 80px
`