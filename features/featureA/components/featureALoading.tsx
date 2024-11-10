type Props = {
  size: number;
};
export const FeatureALoading = ({ size }: Props) => {
  return (
    <div
      style={{
        border: "1px solid",
        display: "flex",
        flexDirection: "column",
        height: `${size}px`,
      }}
    >
      FeatureA Loading...{size}
    </div>
  );
};
