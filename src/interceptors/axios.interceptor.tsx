import axios from "axios"
import { getValidationError } from "../utilities"

export const AxiosInterceptor = () => {
  axios.interceptors.request.use((request) => {
    console.log("Starting Request", request)
    return request
  })

  axios.interceptors.response.use((response) => {
    console.log("Response:", response)
    return response
  },
  (error) => {
    console.log("Error:", getValidationError(error.code))
    return Promise.reject(error)
  }
)
}