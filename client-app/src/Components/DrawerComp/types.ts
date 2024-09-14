export type Anchor = "top" | "left" | "bottom" | "right";
export type Steps = {
  label: string;
  key: React.Key;
  content: string;
  title: string;
}[];
export type Props = {
  open: boolean;
  toggleDrawer: (
    event: React.KeyboardEvent | React.MouseEvent
  ) => void | undefined;
  anchor: Anchor;
  steps: Steps;
};
