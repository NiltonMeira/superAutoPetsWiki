import { SAppBar, SImg, SImgLogin, Slink, SLogin, STitles } from "./styles"

export const AppBar = () => {
    return (
        <>
            <SAppBar>
                <SImg src="/images/name.png" alt="" />
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