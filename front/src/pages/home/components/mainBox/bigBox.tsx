import { SDiv, SDog, SForm, SInput, SInputWrapper, SLinkComponent, SLinkComponentMinor, SMainBox } from "./style"

export const BigBox = () => {
    return (
        <>
            <SMainBox>
                <SForm action="">
                    <SInputWrapper>
                        <SInput placeholder="Type a pet or a food"/>
                    </SInputWrapper>
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