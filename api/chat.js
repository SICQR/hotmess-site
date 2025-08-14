import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Set in Vercel env vars
  });

  try {
    const completion = await client.responses.create({
      model: "gpt-5",
      input: req.body.prompt || "Write a short bedtime story about a unicorn.",
    });

    res.status(200).json({ text: completion.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
}