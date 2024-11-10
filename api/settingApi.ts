import { fetchApi } from "@/lib/apiClient";
import { SettingApi } from "@/types/setting";

export const preloadSetting = () => {
  void getSetting();
};

export const getSetting = async () => {
  return await fetchApi<SettingApi[]>("/api/setting");
};
