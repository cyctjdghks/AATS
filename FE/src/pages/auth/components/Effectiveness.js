import { useCallback, useState } from "react";
import axios from "axios";

// 입력값 저장 및 유효성 검사 진행
export const DataInput = (regExp) => {
  const [inputData, setInputData] = useState("");
  const [dataError, setError] = useState(true);

  const handler = useCallback(
    (event) => {
      const data = event.target.value;
      setInputData(data);
      if (data === ""){
        setError(true);
      } else if (!regExp.test(data)) {
        setError(false);
      } else {
        setError(true);
      }
    },
    [regExp]
  );

  return [inputData, handler, dataError];
};

