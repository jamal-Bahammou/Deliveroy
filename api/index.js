import axios from 'axios'

export const AXIOS = axios.create({ baseURL: `http://192.168.1.100:8080` })
AXIOS.defaults.headers.post["Content-Type"] = "aplication/json"
AXIOS.defaults.headers.common["Authorization"] = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY2MDY2MTIwMn0.KJ1GHKsmJ54JCUeEcrW_v-zFmFRtZfg6A0dX9JIdn21ZniN0S9XFgiCnikmFFKkNv2geGWk4zUbzVS1Nfm_MaQ"