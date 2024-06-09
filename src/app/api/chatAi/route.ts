// next
import { NextRequest, NextResponse } from "next/server";

// libraries
import OpenAI from "openai";

// utils
import { extractCodeInAiResult } from "./extractCodeInAiResult";

export async function POST(req: NextRequest) {
	const data = await req.json();

	const inputText = `
Check if the text below is in ${data.language} code.
If it is not in ${data.language} code, output only the word "false".
If it is in ${data.language} code, enhance the readability of the ${data.language} code below.
The revised code must produce the same result as the original code.
Write the revised code in markdown.
Do not output the original code.

${data.inputCode}
  `;

	const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

	const stream = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: "Say this is a test" }],
		stream: true,
	});

	const completion = await openai.chat.completions.create({
		messages: [{ role: "assistant", content: inputText }],
		model: "gpt-3.5-turbo",
	});

	let updatedCode = "";

	if (completion.choices[0].message.content === "false") {
		updatedCode = `[ERROR] : ${data.language} 코드를 인식할 수 없습니다.`;

		const returnData = {
			updatedCode: updatedCode,
		};

		return NextResponse.json(returnData);
	}

	if (completion.choices[0].message.content) {
		const extractCode = extractCodeInAiResult(
			completion.choices[0].message.content
		);
		if (extractCode.length >= 1) {
			updatedCode = extractCode[0];
		} else {
			updatedCode = "[ERROR] : API 오류";
		}
	}

	const returnData = {
		updatedCode: updatedCode,
	};

	return NextResponse.json(returnData);
}
