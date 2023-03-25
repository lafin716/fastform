export const ElementTypeData: ElementTypeMap = {
  TEXT: <ElementType>{ id: "text", label: "텍스트" },
  TEXTAREA: <ElementType>{ id: "textarea", label: "텍스트박스" },
  PASSWORD: <ElementType>{ id: "password", label: "비밀번호" },
  EMAIL: <ElementType>{ id: "email", label: "이메일" },
  NUMBER: <ElementType>{ id: "number", label: "숫자" },
  DATE: <ElementType>{ id: "date", label: "날짜" },
  TIME: <ElementType>{ id: "time", label: "시간" },
  DATETIME: <ElementType>{ id: "datetime", label: "날짜/시간" },
  CHECKBOX: <ElementType>{ id: "checkbox", label: "체크박스" },
  RADIO: <ElementType>{ id: "radio", label: "라디오버튼" },
  SELECT: <ElementType>{ id: "select", label: "셀렉트박스" },
  FILE: <ElementType>{ id: "file", label: "파일첨부" },
  IMAGE: <ElementType>{ id: "image", label: "이미지첨부" },
  FUNTION: <ElementType>{ id: "funtion", label: "함수" },
};

export type ElementTypeMap = {
  [key: string]: ElementType;
};

export type ElementType = {
  id: string;
  label: string;
};

export type ElementMeta = {
  id: string;
  type: ElementType;
  label: string;
  data?: object;
};
