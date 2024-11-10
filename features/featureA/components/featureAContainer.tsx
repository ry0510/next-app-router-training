import { Item } from "@/components/Item";
import { FeatureA } from "./featureA";
import { fetchApi } from "@/lib/apiClient";
import { ItemApi } from "@/types/item";
import { SettingApi } from "@/types/setting";
import { getItem } from "@/api/itemApi";
import { getSetting } from "@/api/settingApi";

type Props = {
  size: number;
};

export const FeatureAContainer = async ({ size }: Props) => {
  //const setting = await getSetting();
  const data = await getItem();

  // const [setting, data] = await Promise.all([
  //   fetchApi<SettingApi>("/api/setting", { sleep: 15000 }),
  //   fetchApi<ItemApi>("/api/itemA", { sleep: 5000 }),
  // ]);

  console.log("data", data);
  return (
    <span>
      <Item name={`Container:${size}`}>
        <FeatureA name={data.name} />
      </Item>
    </span>
  );
};
