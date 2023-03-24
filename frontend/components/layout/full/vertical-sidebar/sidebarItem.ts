import {
  ApertureIcon,
  CirclePlusIcon,
  CopyIcon,
  LayoutDashboardIcon,
  ListIcon,
  LoginIcon,
  MoodHappyIcon,
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
  { header: "Manage" },
  {
    title: "폼 만들기",
    icon: CirclePlusIcon,
    to: "/forms/add",
  },
  {
    title: "폼 목록",
    icon: ListIcon,
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
