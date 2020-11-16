import axios from "axios"

export const baseURL = "http://127.0.0.1:3000"

const api = axios.create({ baseURL })

export default api
