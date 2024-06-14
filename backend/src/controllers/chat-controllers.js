import { Groq } from "groq-sdk";
import User from "../models/user.js";
import { randomUUID } from "crypto";
export const generateChatCompletion = async (req, res, next) => {
  try {
    const { message } = req.body;
    console.log(res.locals.jwtData.id)
    const userId = res.locals.jwtData.id;
    console.log(userId)

    // Validate userId as ObjectId
    if (!userId || !userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(401).json({ message: "User not found" });

    // Add user message to chats with custom _id
    const newChat = { _id: randomUUID(), content: message, role: "user" };
    user.chats.push(newChat);
    console.log(user.chats)

    // Initialize Groq API
    const groq = new Groq({
      apiKey: process.env.OPEN_AI_KEY,
    });

    // Call Groq API for chat completion
    const chatResponse = await groq.chat.completions.create({
      messages: user.chats.map(({ role, content }) => {
        console.log(role)
        // Ensure that each message has the 'content' property
        if (!content) {
          throw new Error("Message is missing the 'content' property");
        }
        return { role, content };
      }),
      model: "llama3-8b-8192",
    });

    // Extract the assistant's response and push it to the user's chat history
    const assistantMessageContent = chatResponse.choices[0]?.message?.content || "";
    const completionChat = { _id: randomUUID(), content: assistantMessageContent, role: "assistant" };
    user.chats.push(completionChat);

    // Save the user's updated chat history
    await user.save();

    // Return the updated chats
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
export const sendChatsToUser = async (req, res, next) => {
  try {
    console.log(res.locals.jwtData.id)
    const user = await User.findById(res.locals.jwtData.id );
    if (!user) {
      return res.status(401).send("Toke not registered");
    }
    if(user._id.toString()!== res.locals.jwtData.id){
      return res.status(401).send("Permissions didnt match")
    }
    
   
    return res.status(200).json({ message: "OK", chats:user.chats });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

