import { Groq, getGroqChatCompletion } from "groq-sdk";
import { configureOpenAI } from "../config/configure.js";
import user from "../models/user.js";

export const generateChatCompletion = async (req, res, next) => {
  try {
    const { message } = req.body;
    const user = await user.findById(res.locals.jwtData.id);
    if (!user) return res.status(401).json({ message: "bye kaatu" });
    const chats = user.chats.map(({ role, content }) => ({ role, content }));
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });
    const groq = new Groq({
      apiKey: process.env.OPEN_AI_KEY,
    });
    const chatResponse = groq.chat.completions.create({
      messages: chats,
      model: "llama3-8b-8192",
    });
    const chatCompletion = await getGroqChatCompletion();
    user.chats.push(chatCompletion.choices[0]?.message?.content || "");
    await user.save();
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "something went wrong" });
  }
};
