import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZWFjZjA5ODE5ZDNiNDg3MTJmNzhhMyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2OTMxMTAwMzksImV4cCI6MTY5MzM2OTIzOX0.xzzh5TrkuQT6VidDUWUtqcUnfhUUAua9YQi74-J1-3Q"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})