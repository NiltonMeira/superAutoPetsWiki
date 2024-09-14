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