import classNames from "classnames";

import styles from "./IntegrationSDK.module.css";

import { Pinwheel } from "@/widget/Case/CasesHero/Pinwheel/Pinwheel";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";

import { INTEGRATION_SDK_DATA } from "./data";
import { CasePageLayout } from "../CasePageLayout";

export const IntegrationSDKPage = () => {
  return (
    <>
      <Pinwheel {...INTEGRATION_SDK_DATA.hero} />
      <CasePageLayout data={INTEGRATION_SDK_DATA}>
        <CaseSolution
          title={INTEGRATION_SDK_DATA.solution_title}
          subtitle={INTEGRATION_SDK_DATA.solution_info.subtitle}
        >
          <div className={styles.container}>
            {INTEGRATION_SDK_DATA.solution_info.items.map((item, index) => (
              <div
                key={item.id}
                className={classNames(styles.item, {
                  [styles.reverse]: index % 2,
                })}
              >
                <SolutionItem text={item.text} image={item.image} />
              </div>
            ))}
          </div>
        </CaseSolution>
      </CasePageLayout>
    </>
  );
};
