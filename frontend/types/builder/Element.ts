import * as ElementOption from "./ElementOption";

enum ElementType {
  Text = "text",
  TextArea = "textarea",
  Password = "password",
  Email = "email",
  Number = "number",
  Select = "select",
  Radio = "radio",
  Checkbox = "checkbox",
  File = "file",
  Image = "image",
}

interface Element {
  id: string;
  type: ElementType;
  label: string;
  options?: ElementOption.ElementOption;
}

interface TextElement extends Element {
  type: ElementType.Text;
  options?: ElementOption.TextElementOption;
}

interface PasswordElement extends Element {
  type: ElementType.Password;
  options?: ElementOption.PasswordElementOption;
}

interface EmailElement extends Element {
  type: ElementType.Email;
  options?: ElementOption.EmailElementOption;
}

interface NumberElement extends Element {
  type: ElementType.Number;
  options?: ElementOption.NumberElementOption;
}

interface TextAreaElement extends Element {
  type: ElementType.TextArea;
  options?: ElementOption.TextAreaElementOption;
}

interface SelectElement extends Element {
  type: ElementType.Select;
  options?: ElementOption.SelectElementOption;
}

interface RadioElement extends Element {
  type: ElementType.Radio;
  options?: ElementOption.RadioElementOption;
}

interface CheckboxElement extends Element {
  type: ElementType.Checkbox;
  options?: ElementOption.CheckboxElementOption;
}

interface FileElement extends Element {
  type: ElementType.File;
  options?: ElementOption.FileElementOption;
}

interface ImageElement extends Element {
  type: ElementType.Image;
  options?: ElementOption.ImageElementOption;
}

export {
  ElementType,
  Element,
  TextElement,
  TextAreaElement,
  SelectElement,
  RadioElement,
  CheckboxElement,
  FileElement,
  ImageElement,
};
