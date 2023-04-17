interface ElementOption {
  required: boolean;
}

interface TextElementOption extends ElementOption {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

interface PasswordElementOption extends ElementOption {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
}

interface EmailElementOption extends ElementOption {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
}

interface NumberElementOption extends ElementOption {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  minSize?: number;
  maxSize?: number;
  pattern?: string;
}

interface TextAreaElementOption extends ElementOption {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  rows?: number;
}

interface SelectElementOption extends ElementOption {
  options: SelectElementOptionItem[];
}

interface SelectElementOptionItem {
  label: string;
  value: string;
}

interface RadioElementOption extends ElementOption {
  options: RadioElementOptionItem[];
}

interface RadioElementOptionItem {
  label: string;
  value: string;
}

interface CheckboxElementOption extends ElementOption {
  options: CheckboxElementOptionItem[];
}

interface CheckboxElementOptionItem {
  label: string;
  value: string;
}

interface FileElementOption extends ElementOption {
  accept?: string;
  multiple?: boolean;
}

interface ImageElementOption extends ElementOption {
  accept?: string;
  multiple?: boolean;
}

export {
  ElementOption,
  TextElementOption,
  PasswordElementOption,
  EmailElementOption,
  NumberElementOption,
  TextAreaElementOption,
  SelectElementOption,
  SelectElementOptionItem,
  RadioElementOption,
  RadioElementOptionItem,
  CheckboxElementOption,
  CheckboxElementOptionItem,
  FileElementOption,
  ImageElementOption,
};
