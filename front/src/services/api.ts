import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:911/",
    timeout: 80000
})

export default api