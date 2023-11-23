import { OPENAI_USER_PROMPT, OPEN_AI_SYSTEM_PROMPT } from "~/prompt";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export async function POST(request: Request) {
  const { image } = await request.json();
  const body: GPT4VCompletionRequest = {
    model: "gpt-4-vision-preview",
    max_tokens: 4096,
    messages: [
      {
        role: "system",
        content: OPEN_AI_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: image,
          },
          OPENAI_USER_PROMPT,
        ],
      },
    ],
  };

  let json = null;
  try {
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(body),
    });
    json = await resp.json();
  } catch (e) {
    console.log(e);
  }

  return new Response(JSON.stringify(json), {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}

type MessageContent =
  | string
  | (string | { type: "image_url"; image_url: string })[];

export type GPT4VCompletionRequest = {
  model: "gpt-4-vision-preview";
  messages: {
    role: "system" | "user" | "assistant" | "function";
    content: MessageContent;
    name?: string | undefined;
  }[];
  functions?: unknown[] | undefined;
  function_call?: unknown[] | undefined;
  stream?: boolean | undefined;
  temperature?: number | undefined;
  top_p?: number | undefined;
  max_tokens?: number | undefined;
  n?: number | undefined;
  best_of?: number | undefined;
  frequency_penalty?: number | undefined;
  presence_penalty?: number | undefined;
  logit_bias?:
    | Record<string, number>
    | undefined;
  stop?: (string[] | string) | undefined;
};