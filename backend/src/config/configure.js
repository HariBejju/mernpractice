import Groq from "groq-sdk";

export const configureOpenAI=()=>{
    const grow = new Groq ({
        apiKey: process.env.OPEN_AI_KEY
    })
    return config
}