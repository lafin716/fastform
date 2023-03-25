import {
  ApertureIcon,
  CirclePlusIcon,
  CopyIcon,
  FormsIcon,
  LayoutDashboardIcon,
  ListIcon,
  LoginIcon,
  MoodHappyIcon,
  Stack2Icon,
  TypographyIcon,
  UserPlusIcon,
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "대시보드",
    icon: LayoutDashboardIcon,
    to: "/",
  },
  { header: "Elements" },
  {
    title: "입력항목 만들기",
    icon: CirclePlusIcon,
    to: "/elements/add",
  },
  {
    title: "입력항목 관리",
    icon: FormsIcon,
    to: "/elements",
  },
  { header: "Manage" },
  {
    title: "폼 만들기",
    icon: CirclePlusIcon,
    to: "/forms/add",
  },
  {
    title: "폼 관리",
    icon: Stack2Icon,
    to: "/forms",
  },
  { header: "utilities" },
  {
    title: "Typography",
    icon: TypographyIcon,
    to: "/ui/typography",
  },
  {
    title: "Shadow",
    icon: CopyIcon,
    to: "/ui/shadow",
  },
  { header: "auth" },
  {
    title: "Login",
    icon: LoginIcon,
    to: "/auth/login",
  },
  {
    title: "Register",
    icon: UserPlusIcon,
    to: "/auth/register",
  },
  { header: "Extra" },
  {
    title: "Icons",
    icon: MoodHappyIcon,
    to: "/icons",
  },
  {
    title: "Sample Page",
    icon: ApertureIcon,
    to: "/sample-page",
  },
];

export default sidebarItem;
