import { ReactNode } from "react";

type Props = {
  name: string;
  children: ReactNode;
};
export const Item = ({ name, children }: Props) => {
  return (
    <div
      style={{ border: "1px solid", display: "flex", flexDirection: "column" }}
    >
      <div>{name}</div>
      {children}
    </div>
  );
};
