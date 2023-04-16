import * as ElementOption from "./ElementOption";

enum ElementType {
  Text = "text",
  TextArea = "textarea",
  Select = "select",
  Radio = "radio",
  Checkbox = "checkbox",
  File = "file",
  Image = "image",
}

const ElementTypeList = [
  { value: ElementType.Text, label: "텍스트박스" },
  { value: ElementType.TextArea, label: "텍스트에어리어" },
  { value: ElementType.Select, label: "셀렉트박스" },
  { value: ElementType.Radio, label: "라디오버튼" },
  { value: ElementType.Checkbox, label: "체크박스" },
  { value: ElementType.File, label: "파일업로드" },
  { value: ElementType.Image, label: "이미지업로드" },
];

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
  ElementTypeList,
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
