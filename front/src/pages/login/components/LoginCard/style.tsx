import { Box, Button, styled } from "@mui/material";

export const SLoginCard = styled("form")`
    background-color: #d99f70;
    color: #57291a;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 40%;
    font-size: 1.5rem;
    border: black solid 7px;
    border-radius: 8px;

    gap: 30px;

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

export const SDiv = styled(Box)`
    background-color: #f7cc8c;

    width: 94%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    border-radius: 8px;
    gap: 30px;
    padding: 30px;
`;


export const SInput = styled("input")`
    width: 100%; /* Ajustado para evitar problemas de overflow */
    padding: 10px;

    border-radius: 5px;
    border: none;
    
    z-index: 0;

    font-family: "Super";
    font-size: 1.5rem;
    
    @media (max-width: 480px) {
        padding: 0.8rem;
        font-size: 0.9rem;
    }
`;

export const SDivButton = styled(Box)`
    width: 100%;

    display: flex;
    justify-content: center;
`

export const SButton = styled(Button)`
    border: black 2px solid;
    width: 30%;
    right: 0;

`