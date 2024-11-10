type Props = {
  name: string;
};
export const FeatureB = ({ name }: Props) => {
  return <span>FeatureB-{name}</span>;
};
