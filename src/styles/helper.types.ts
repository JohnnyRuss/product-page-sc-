export interface FlexPropertyType {
  align?: "flex-start" | "flex-end" | "center";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export interface FlexBoxType {
  direction?: "row" | "column";
}
