import { ElementType, TextElement } from "@/types/fastform/Element.js";
import TextField from "./TextField.vue";
import TextAreaField from "./TextAreaField.vue";
import PasswordField from "./PasswordField.vue";
import EmailField from "./EmailField.vue";
import NumberField from "./NumberField.vue";
import DateField from "./DateField.vue";
import TimeField from "./TimeField.vue";
import DatetimeField from "./DatetimeField.vue";
import CheckboxField from "./CheckboxField.vue";
import RadioField from "./RadioField.vue";
import SelectField from "./SelectField.vue";
import FileField from "./FileField.vue";
import ImageField from "./ImageField.vue";
import TextOptionFields from "./option/TextOptionFields.vue";
import SelectOptionFields from "./option/SelectOptionFields.vue";
import RadioOptionFields from "./option/RadioOptionFields.vue";
import CheckboxOptionFields from "./option/CheckboxOptionFields.vue";
import FileOptionFields from "./option/FileOptionFields.vue";
import ImageOptionFields from "./option/ImageOptionFields.vue";

export type ElementTypeMap = {
  [key: string]: ElementType;
};

export const ElementTypeData: ElementTypeMap = {
  TEXT: <ElementType>{ id: "text", label: "텍스트", data: {} },
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
};

export const elementMap = {
  [ElementTypeData.TEXT.id]: {
    component: {
      option: TextOptionFields,
      preview: TextField,
    },
  },
  [ElementTypeData.TEXTAREA.id]: {
    component: {
      option: TextOptionFields,
      preview: TextAreaField,
    },
  },
  [ElementTypeData.PASSWORD.id]: {
    component: {
      option: TextOptionFields,
      preview: PasswordField,
    },
  },
  [ElementTypeData.EMAIL.id]: {
    component: {
      option: TextOptionFields,
      preview: EmailField,
    },
  },
  [ElementTypeData.NUMBER.id]: {
    component: {
      option: TextOptionFields,
      preview: NumberField,
    },
  },
  [ElementTypeData.DATE.id]: {
    component: {
      option: TextOptionFields,
      preview: DateField,
    },
  },
  [ElementTypeData.TIME.id]: {
    component: {
      option: TextOptionFields,
      preview: TimeField,
    },
  },
  [ElementTypeData.DATETIME.id]: {
    component: {
      option: TextOptionFields,
      preview: DatetimeField,
    },
  },
  [ElementTypeData.CHECKBOX.id]: {
    component: {
      option: CheckboxOptionFields,
      preview: CheckboxField,
    },
  },
  [ElementTypeData.RADIO.id]: {
    component: {
      option: RadioOptionFields,
      preview: RadioField,
    },
  },
  [ElementTypeData.SELECT.id]: {
    component: {
      option: SelectOptionFields,
      preview: SelectField,
    },
  },
  [ElementTypeData.FILE.id]: {
    component: {
      option: FileOptionFields,
      preview: FileField,
    },
  },
  [ElementTypeData.IMAGE.id]: {
    component: {
      option: ImageOptionFields,
      preview: ImageField,
    },
  },
};
