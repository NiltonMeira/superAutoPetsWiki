import { Box, IconButton, Modal } from "@mui/material";
import { useState } from "react";
import { SAppBar, SImg, SImgLogin, Slink, SLogin, STitles, SMenuIcon, SModalBox } from "./styles";

export const AppBar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <SAppBar>
                <Box>
                    <SImg src="/images/name.png" alt="" />
                </Box>

                <STitles>
                    <Slink to={"/"}>Home</Slink>
                    <Slink to={"/"}>Pets</Slink>
                    <Slink to={"/"}>Foods</Slink>
                </STitles>

                <SLogin>
                    <Slink to={"/"}>
                        <SImgLogin src="/images/login.png" alt="" />
                    </Slink>
                </SLogin>

                <IconButton onClick={handleOpen}>
                    <SMenuIcon src="/images/menu-icon.png" alt="Menu" />
                </IconButton>
            </SAppBar>

            <Modal open={open} onClose={handleClose}>
                <SModalBox>
                    <Slink to={"/"} onClick={handleClose}>Home</Slink>
                    <Slink to={"/"} onClick={handleClose}>Pets</Slink>
                    <Slink to={"/"} onClick={handleClose}>Foods</Slink>
                    <Slink to={"/"} onClick={handleClose}>
                        <SImgLogin src="/images/login.png" alt="Login" />
                    </Slink>
                </SModalBox>
            </Modal>
        </>
    );
};
