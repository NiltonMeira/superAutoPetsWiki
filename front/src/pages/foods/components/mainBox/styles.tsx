import { Box, styled } from "@mui/material";

export const SMainBox = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
    padding: 25px;
    padding-top: 150px;
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

    width: 80%;
    font-size: 3rem;
    border: black solid 7px;
    border-radius: 8px;
    padding: 30px;

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
    width: 100%;

    display: flex;
    flex-direction: column;
    padding: 30px;

    border-radius: 8px;
    gap: 30px;
    
    /* Remove a height fixed to allow dynamic growth */
    min-height: 200px; /* Optional: set a minimum height */
`;


