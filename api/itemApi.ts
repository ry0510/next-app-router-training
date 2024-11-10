import { fetchApi } from "@/lib/apiClient";
import { ItemApi } from "@/types/item";

export const preloadItem = () => {
  void getItem();
};

export const getItem = async () => {
  return await fetchApi<ItemApi>("/api/itemA");
};
