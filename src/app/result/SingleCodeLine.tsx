"use client"

// react
import { useState } from "react"

// components
import { Spacer } from "@/components/basics/Spacer"

// hooks
import { useChecker } from "@/hooks/useChecker"

// utils
import warnTypeTranslator from "@/utils/translator/warnTypeTranslator.json"

interface props {
  lineNumber: number
  codeLine: string
  isShowWarn: boolean
}

export const SingleCodeLine = (props: props) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false)

  const { checkResult } = useChecker()

  if (props.isShowWarn && checkResult[props.lineNumber] && checkResult[props.lineNumber].length >= 1) {
    switch (checkResult[props.lineNumber][0].type) {
      case "warn": {
        return (
          <div>
            <div className="flex">
              <p className="text-right p-4 text-gray-400 bg-yellow-400/40" style={{ minWidth: "42px" }}>{props.lineNumber + 1}</p>
              <p
                className="bg-yellow-400/40 hover:border border-white"
                onClick={() => setIsMessageVisible(!isMessageVisible)}
              >
                {props.codeLine}
              </p>
            </div>


            {
              isMessageVisible &&
              <div className="flex flex-col gap-4 py-4 mb-4 border border-yellow-400">
                {
                  checkResult[props.lineNumber].map((errorMessage, idx) =>
                    <div key={idx} className="flex">
                      <div className="flex flex-col" style={{ paddingLeft: "42px" }}>
                        <p className="font-bold">타입 : {warnTypeTranslator[errorMessage.checkType]}</p>
                        <Spacer distance={4} />
                        <p>{errorMessage.reason}</p>
                      </div>
                    </div>
                  )
                }
              </div>
            }

          </div>
        )
      }
      case "error": {
        return (
          <div className="flex">
            <p className="pr-4 text-right text-gray-400" style={{ minWidth: "42px" }}>{props.lineNumber + 1}</p>
            <p>{props.codeLine}</p>
          </div>
        )
      }
    }

  }
  else {
    return (
      <div className="flex">
        <p className="pr-4 text-right text-gray-400" style={{ minWidth: "42px" }}>{props.lineNumber + 1}</p>
        <p>{props.codeLine}</p>
      </div>
    )
  }
}