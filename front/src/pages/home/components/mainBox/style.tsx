import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const SMainBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
    padding: 25px;
    padding-top: 50px;
    gap: 20px;

    background-image: url(/images/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
        background-size: contain; 
    }

    @media (max-width: 480px) {
        background-size: cover; 
    }
`;

export const SLinkComponent = styled(Link)`
    background-color: #d99f70;
    color: #57291a;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40%;
    height: 25%;
    font-size: 7rem;
    border: black solid 7px;
    border-radius: 8px;

    @media (max-width: 768px) {
        width: 80%;
        height: 15%;
        font-size: 3.5rem;
    }

    @media (max-width: 480px) {
        width: 90%;
        height: 12%;
        font-size: 2.5rem;
    }

`;

export const SLinkComponentMinor = styled(Link)`
    background-color: #d99f70;
    color: #57291a;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40%;
    height: 15%;
    font-size: 4rem;
    border: black solid 7px;
    border-radius: 8px;

    @media (max-width: 768px) {
        width: 80%;
        height: 12%;
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        width: 90%;
        height: 10%;
        font-size: 1.8rem;
    }
`;

export const SDiv = styled(Box)`
    background-color: #f7cc8c;

    height: 82%;
    width: 95%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;
    gap: 30px;
`;

export const SDog = styled("img")`
    height: 70%;
`;

export const SForm = styled("form")`
    width: 40%;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
    
`;

export const SInputWrapper = styled("div")`
    position: relative;
    width: 100%;

    &::after {
        content: '';
        background-image: url('images/procurar.png');
        background-size: contain;
        position: absolute;
        top: 15%;
        right: 10px;
        z-index: 10;
        width: 25px;
        height: 25px;
    }
`;

export const SInput = styled("input")`
    width: 100%; /* Ajustado para evitar problemas de overflow */
    padding: 10px;

    border-radius: 5px;
    border: none;
    
    position: relative;
    z-index: 0;

    font-family: "Super";
    font-size: 1.5rem;
    
    @media (max-width: 480px) {
        padding: 0.8rem;
        font-size: 0.9rem;
    }
`;

// export const SSSInput = styled("input")(() => ({
//     position: "relative",
//     '&::after': {
//         content: "''",
//         position: "absolute",
//         width: 100,
//         height: 100,
//         top: 0,
//         left: 0,
//         backgroundColor: "red",
//         display: "block"
//     }
// }))




