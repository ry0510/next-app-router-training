import { Suspense } from "react";
import { FeatureALoading } from "./featureALoading";
import { getSetting } from "@/api/settingApi";
import { FeatureAContainer } from "./featureAContainer";

export const FeatureASuspense = async () => {
  const setting = await getSetting();
  const size = setting.at(0)?.size ?? 0;

  return (
    <Suspense fallback={<FeatureALoading size={size} />}>
      <FeatureAContainer size={size} />
    </Suspense>
  );
};
