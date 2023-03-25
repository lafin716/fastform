export type ElementOption = {};

export type TextElementOption = ElementOption & {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
};

export type TextAreaElementOption = ElementOption & {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  rows?: number;
};

export type SelectElementOption = ElementOption & {
  ElementOptions: SelectElementOptionItem[];
};

export type SelectElementOptionItem = {
  label: string;
  value: string;
};

export type RadioElementOption = ElementOption & {
  ElementOptions: RadioElementOptionItem[];
};

export type RadioElementOptionItem = {
  label: string;
  value: string;
};

export type CheckboxElementOption = ElementOption & {
  ElementOptions: CheckboxElementOptionItem[];
};

export type CheckboxElementOptionItem = {
  label: string;
  value: string;
};

export type FileElementOption = ElementOption & {
  accept?: string;
  multiple?: boolean;
};

export type ImageElementOption = ElementOption & {
  accept?: string;
  multiple?: boolean;
};
