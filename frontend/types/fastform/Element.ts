import {
  TextElementOption,
  TextAreaElementOption,
  SelectElementOption,
  RadioElementOption,
  CheckboxElementOption,
  FileElementOption,
  ImageElementOption,
} from "./ElementOption";

export type Element = {
  id: string;
  type: ElementType;
  label: string;
};

export type TextElement = Element & {
  data: TextElementOption;
};

export type TextAreaElement = Element & {
  data: TextAreaElementOption;
};

export type SelectElement = Element & {
  data: SelectElementOption;
};

export type RadioElement = Element & {
  data: RadioElementOption;
};

export type CheckboxElement = Element & {
  data: CheckboxElementOption;
};

export type FileElement = Element & {
  data: FileElementOption;
};

export type ImageElement = Element & {
  data: ImageElementOption;
};

export type ElementType = {
  id: string;
  label: string;
};
