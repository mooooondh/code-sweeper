"use client";

// react
import { useState } from "react";

// libraries
import { useRecoilState } from "recoil";
import axios from "axios";

// recoilStates
import {
	selectedLanguageState,
	inputCodeState,
	linedInputCodeState,
} from "../utils/recoilStates/inputCode";
import {
	checkResultState,
	aiResultState,
	aiResultLinedCodeState,
} from "../utils/recoilStates/result";

// interfaces
import { ILanguage } from "@/utils/interfaces/languages";

// utils
import { lineSeperator } from "@/utils/utilFunctions/lineSeperator";

export const useChecker = () => {
	const [selectedLanguage, setSelectedLanguage] = useRecoilState(
		selectedLanguageState
	);

	const [inputCode, setInputCode] = useRecoilState(inputCodeState);
	const [linedInputCode, setLinedInputCode] =
		useRecoilState(linedInputCodeState);

	const [checkResult, setCheckResult] = useRecoilState(checkResultState);
	const [aiResult, setAiResult] = useRecoilState(aiResultState);
	const [aiResultLinedCode, setAiResultLinedCode] = useRecoilState(
		aiResultLinedCodeState
	);

	const [isAlgorithmLoading, setIsAlgorithmLoading] = useState(false);
	const [isAiResultLoading, setIsAiResultLoading] = useState(false);

	const updateLanguage = (updatedLanguage: ILanguage) => {
		setSelectedLanguage(updatedLanguage);
	};

	const updateInputCode = (updatedCode: string) => {
		setInputCode(updatedCode);
	};

	const checkIsCleanCode = async () => {
		setIsAlgorithmLoading(true);
		setLinedInputCode(lineSeperator(inputCode));

		const response = await axios({
			method: "post",
			url: "/api/algorithm",
			headers: { "content-type": "application/json" },
			data: { language: selectedLanguage, inputCode: inputCode },
		});

		setCheckResult(response.data.cleanCodeCheckResult);

		setIsAlgorithmLoading(false);
	};

	const checkIsCleanCodeWithAi = async () => {
		setIsAiResultLoading(true);

		const response = await axios({
			method: "post",
			url: "/api/chatAi",
			headers: { "content-type": "application/json" },
			data: { language: selectedLanguage, inputCode: inputCode },
		});

		setAiResult(response.data.updatedCode);
		setAiResultLinedCode(lineSeperator(response.data.updatedCode));

		setIsAiResultLoading(false);
	};

	const clearResult = () => {
		setLinedInputCode([]);
		setCheckResult({});
		setAiResult("");
		setAiResultLinedCode([]);
	};

	return {
		selectedLanguage,
		updateLanguage,
		inputCode,
		updateInputCode,
		checkIsCleanCode,
		checkIsCleanCodeWithAi,
		linedInputCode,
		checkResult,
		aiResult,
		aiResultLinedCode,
		isAiResultLoading,
		isAlgorithmLoading,
		clearResult,
	};
};
