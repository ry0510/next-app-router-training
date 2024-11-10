import Image from "next/image";
import styles from "./page.module.css";
import { FeatureAContainer } from "@/features/featureA/components/featureAContainer";
import { Suspense } from "react";
import { FeatureALoading } from "@/features/featureA/components/featureALoading";
import { fetchApi } from "@/lib/apiClient";
import { SettingApi } from "@/types/setting";
import { getSetting, preloadSetting } from "@/api/settingApi";
import { FeatureASuspense } from "@/features/featureA/components/featureASuspense";
import { preloadItem } from "@/api/itemApi";

export default async function Home() {
  //preloadSetting();
  preloadItem();

  // const setting = await getSetting();
  // const size = setting.at(0)?.size ?? 0;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {/* <Suspense fallback={<FeatureALoading size={size} />}>
          <FeatureAContainer size={size} />
        </Suspense> */}
        <FeatureASuspense />
        <Suspense fallback={<div>Item Api Loading...</div>}>
          <FeatureAContainer size={3} />
        </Suspense>
      </main>
    </div>
  );
}

// async function HomePrivate() {
//   const setting = await fetchApi<SettingApi[]>("/api/setting", { sleep: 3000 });

//   return (
//     <div className={styles.page}>
//       {setting.at(0)?.size}
//       <Suspense fallback={<div>最上位のSuspense</div>}>
//         <main className={styles.main}>
//           <Image
//             className={styles.logo}
//             src="/next.svg"
//             alt="Next.js logo"
//             width={180}
//             height={38}
//             priority
//           />
//           <Suspense
//             fallback={<FeatureALoading size={setting.at(0)?.size ?? 0} />}
//           >
//             <FeatureAContainer />
//           </Suspense>
//         </main>
//       </Suspense>
//     </div>
//   );
// }
