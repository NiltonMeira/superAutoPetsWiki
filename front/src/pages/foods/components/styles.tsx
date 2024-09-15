import { Box, styled } from "@mui/material";

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

export const DarkBrownBox = styled(Box)`
    background-color: #d99f70;
    color: #57291a;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 70%;
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

export const LightBrownBox = styled(Box)`
    background-color: #f7cc8c;

    height: 82%;
    width: 95%;

    display: flex;
    align-items: center;
    padding: 30px;

    border-radius: 8px;
    gap: 30px;
`;