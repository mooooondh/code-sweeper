"use client"

// libraries
import { useRecoilState } from 'recoil';

// states
import { inputCodeState, linedInputCodeState } from '../utils/recoilStates/InputCode';
import { checkResultState } from '../utils/recoilStates/Result';

// checkAlgorithm
import { IsCleanCode } from '@/checkAlgorithm/javascript';

// utils
import { LineSeperator } from '@/utils/utilFunctions/LineSeperator';

export const useChecker = () => {
  const [inputCode, setInputCode] = useRecoilState(inputCodeState)
  const [linedInputCode, setLinedInputCode] = useRecoilState(linedInputCodeState)
  const [checkResult, setCheckResult] = useRecoilState(checkResultState)

  const UpdateInputCode = (updatedCode: string) => {
    setInputCode(updatedCode)
  };

  const CheckIsCleanCode = () => {
    setLinedInputCode(LineSeperator(inputCode))

    const cleanCodeCheckResult = IsCleanCode(LineSeperator(inputCode))
    setCheckResult(cleanCodeCheckResult)
  }

  return { inputCode, UpdateInputCode, CheckIsCleanCode, linedInputCode, checkResult };
};