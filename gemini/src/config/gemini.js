import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBdM5k2-o-U_tK9RAAsOKtlWEc0Y_wDtok";
const genAI = new GoogleGenerativeAI(apiKey); // ✅ No need for object with { apiKey }

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function runChat(promptText) {
    try {
        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [{ text: promptText }],
                },
            ],
        });

        const response = await result.response;
        const text = response.candidates?.[0]?.content?.parts?.[0]?.text;

        console.log(text || "No response received.");
        return text;
    } catch (err) {
        console.error("Gemini Error:", err);
        return null;
    }
}

export default runChat;
