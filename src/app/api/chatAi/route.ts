// next
import { NextRequest, NextResponse } from "next/server";

// libraries
import OpenAI from "openai";

// utils
import { extractCodeInAiResult } from "./extractCodeInAiResult";

export async function POST(req: NextRequest) {
	const data = await req.json();

	const inputText = `
  아래 입력된 글이 ${data.language}코드인지 확인해줘.
  만약 ${data.language}코드가 아니라면, "false"라는 글자만 출력해줘.
  만약 ${data.language}코드가 맞다면, 아래 입력된 ${data.language}코드를 클린 코드로 수정해주고, 가독성을 높여줘.
  가능하다면, 변수명, 함수명 등의 이름도 이해하기 쉽게 바꿔줘.
	작성된 코드의 동작을 수정하지는 말아줘.
  수정된 코드는 markdown으로 작성해줘.
  수정 전 코드는 출력하지 말아줘.

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
