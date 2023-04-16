import { Element } from "../fastform/Element";

enum LayoutType {
  ROW = "row",
  COLUMN = "column",
}

interface Layout {
  id: string;
  name: string;
  type: LayoutType;
  elements: Element[] | Layout[];
}

export { LayoutType, Layout };
