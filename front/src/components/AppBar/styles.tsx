import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const SAppBar = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 25px;
    position: fixed;
    width: 100%;
    backdrop-filter: blur(4px);

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

export const STitles = styled(Box)`
    display: flex;
    justify-content: center; 
    flex-grow: 1; 
    gap: 70px;

    @media (max-width: 768px) {
        display: none; 
    }
`;

export const SLogin = styled(Box)`
    display: flex;
    align-items: center; 

    @media (max-width: 768px) {
        display: none; 
    }
`;

export const Slink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
    transition: 0.5s;

    &:hover {
        color: #fe5900;
        transform: scale(1.1);
    }
`;

export const SImg = styled("img")`
    width: 150px;
`;

export const SImgLogin = styled("img")`
    width: 80px;
`;

export const SMenuIcon = styled("img")`
    width: 40px;
    display: none;

    @media (max-width: 768px) {
        display: block; 
    }
`;

export const SModalBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #333;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;
    outline: none;
    width: 80%;
    max-width: 400px;

    @media (max-width: 480px) {
        width: 90%;
    }
`;
