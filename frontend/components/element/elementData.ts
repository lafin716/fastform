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
import { ElementType } from "~~/types/builder/Element";

export const elementFieldSet = {
  [ElementType.Text]: {
    id: ElementType.Text,
    label: "텍스트",
    preview: TextField,
    option: TextOptionFields,
  },
  [ElementType.Password]: {
    id: ElementType.Password,
    label: "비밀번호",
    preview: PasswordField,
    option: TextOptionFields,
  },
  [ElementType.Email]: {
    id: ElementType.Email,
    label: "이메일",
    preview: EmailField,
    option: TextOptionFields,
  },
  [ElementType.Number]: {
    id: ElementType.Number,
    label: "숫자",
    preview: NumberField,
    option: TextOptionFields,
  },
  [ElementType.TextArea]: {
    id: ElementType.TextArea,
    label: "텍스트박스",
    preview: TextAreaField,
    option: TextOptionFields,
  },
  [ElementType.Checkbox]: {
    id: ElementType.Checkbox,
    label: "체크박스",
    preview: CheckboxField,
    option: CheckboxOptionFields,
  },
  [ElementType.Radio]: {
    id: ElementType.Radio,
    label: "라디오버튼",
    preview: RadioField,
    option: RadioOptionFields,
  },
  [ElementType.Select]: {
    id: ElementType.Select,
    label: "셀렉트박스",
    preview: SelectField,
    option: SelectOptionFields,
  },
  [ElementType.File]: {
    id: ElementType.File,
    label: "파일첨부",
    preview: FileField,
    option: FileOptionFields,
  },
  [ElementType.Image]: {
    id: ElementType.Image,
    label: "이미지첨부",
    preview: ImageField,
    option: ImageOptionFields,
  },
};
