export const LayoutType = {
  ROW: { id: "row", label: "행" },
  COL: { id: "col", label: "열" },
};

export type LayoutMeta = {
  id: string;
  type: string;
  label: string;
  children: [];
};
