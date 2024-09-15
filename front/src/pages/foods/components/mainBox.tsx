import { useState } from "react"
import { DarkBrownBox, LightBrownBox, SMainBox } from "./styles"
import api from "../../../services/api"
export const MainBox = () => {

    const [food, setFood] = useState("")

    const getData = async () => {
        try{
            const response = await api.get("")
        } catch(err) {
            console.log(err) 
    } 
    }


    getData()

    return(
        <>
            <SMainBox>
                <DarkBrownBox>
                    <LightBrownBox>
                        <h5>Foods</h5>
                    </LightBrownBox>
                </DarkBrownBox>
            </SMainBox>
        </>
    )

}