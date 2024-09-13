import { SDiv, SDog, SForm, SInput, SLinkComponent, SLinkComponentMinor, SMainBox } from "./style"

export const BigBox = () => {
    return (
        <>
            <SMainBox>
                <SForm action="">
                    <SInput></SInput>
                </SForm>
                <SLinkComponent to={""}>
                    <SDiv>
                        <p>Pets</p>
                        <SDog src="/images/Dog.webp" alt="" />
                    </SDiv>
                </SLinkComponent>
                <SLinkComponentMinor to={""}>
                    <SDiv>
                        <p>Foods</p>
                    </SDiv>
                </SLinkComponentMinor>
                <SLinkComponentMinor to={""}>
                    <SDiv>
                        <p>Creators</p>
                    </SDiv>
                </SLinkComponentMinor>
            </SMainBox>
        </>
    )
}