import classNames from "classnames";

import styles from "./DigitalAsset.module.css";

import { Web3 } from "@/widget/Case/CasesHero/Web3/Web3";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";

import { DIGITAL_ASSET_DATA } from "./data";
import { CasePageLayout } from "../CasePageLayout";

export const DigitalAssetPage = () => {
  return (
    <section className={styles.section}>
      <Web3 {...DIGITAL_ASSET_DATA.hero} />
      <CasePageLayout data={DIGITAL_ASSET_DATA}>
        <CaseSolution
          title={DIGITAL_ASSET_DATA.solution_title}
          subtitle={DIGITAL_ASSET_DATA.solution_info.subtitle}
        >
          <div className={styles.container}>
            {DIGITAL_ASSET_DATA.solution_info.items.map((item, index) => (
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
    </section>
  );
};
