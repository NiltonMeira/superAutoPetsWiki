import { FormEventHandler, useState } from "react"
import { SButton, SDiv, SDivButton, SInput, SLoginCard } from "./style"
import { toast } from "react-toastify"
import api from "../../../../services/api"
import { useNavigate } from "react-router-dom"

export const LoginCard = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    
    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        if(!validateEmail(email)){
            console.log("dfsfdfdfd");
            toast.error("Email invalido")
            return
        }

        const formValue = {
            email: email,
            password: password
        }

        try{
            const response = await api.post("auth", formValue)

            if(response.data && response.data.token){
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("id", response.data.id) 
                
                toast.success("login bem-sucedido")
                console.log(email);
                console.log(password);
                
                navigate('/')
            }
        } catch(err){
            toast.error("Erro ao fazer login")
            console.log(err);
        }
    
    }

    const validateEmail = (inputValue: string) => {
        const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        return emailRegex.test(inputValue)
    }

    return (
        <>
            <SLoginCard onSubmit={handleSubmit}>
                <SDiv>
                    <h3>Email</h3>
                    <SInput
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <h3>Password</h3>
                    <SInput
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SDivButton>
                        <SButton type="submit">
                            Login
                        </SButton>
                    </SDivButton>
                </SDiv>
            </SLoginCard>
        </>
    )
}