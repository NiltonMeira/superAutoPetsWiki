import { BasicTable } from "../table/table"
import { DarkBrownBox, LightBrownBox, SMainBox } from "./styles"

export const MainBox = () => {

    return (
        <>
            <SMainBox>
                <DarkBrownBox>
                    <LightBrownBox>
                        <p>Foods</p>
                        <BasicTable></BasicTable>
                    </LightBrownBox>
                </DarkBrownBox>
            </SMainBox>
        </>
    )

}