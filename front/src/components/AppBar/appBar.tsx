import { Box } from "@mui/material"
import { SAppBar, SImg, SImgLogin, Slink, SLogin, STitles } from "./styles"

export const AppBar = () => {
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


            </SAppBar>
        </>
    )
}