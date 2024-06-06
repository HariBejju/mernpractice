import axios from 'axios'
export const loginUser = async(email,password)=>{
    const api = axios.create({
        baseURL: 'http://localhost:3000/api/v1', // Change this to your API server's base URL
      });
    const res = await api.post("/user/login",{email,password})
    if(res.status!==200){
        throw new Error("Unable to login")
    }
    const data = await res.data
    return data
}

export const CheckAuthStatus = async()=>{
    const api = axios.create({
        baseURL: 'http://localhost:3000/api/v1', // Change this to your API server's base URL
      });
      console.log("checkauuth")
      try {
        const res = await api.post("/user/auth-status"); // Passing email and password in the request body
        if (res.status !== 200) {
          throw new Error("Unable to login");
        }
        const data = res.data; // Accessing the data property of the response object
        return data;
      } catch (error) {
        console.error("Error during authentication:", error);
        throw error;
      }
}

export const sendChatRequest = async(message)=>{
  
    try {
      const api = axios.create({
        baseURL: 'http://localhost:3000/api/v1', // Change this to your API server's base URL
      });
      const res = await api.post("/chat/new",{message}) // Passing email and password in the request body
      if (res.status !== 200) {
        throw new Error("Unable to send chat");
      }
      const data = res.data; // Accessing the data property of the response object
      return data;
    } catch (error) {
      console.error("Error during authentication:", error);
      throw error;
    }
}


