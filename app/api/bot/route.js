import { Configuration, OpenAIApi } from "openai";

export async function POST(request) {
  const { messages } = await request.json();

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a Helpful CA DMV bot. You are helpful and kind.  you give all the rules requried for his/her quries, you are a quick life saver for people who are to new driving",
      },
      ...messages,
    ],
  });

  return new Response(JSON.stringify({ response: response.data.choices[0] }));
}
