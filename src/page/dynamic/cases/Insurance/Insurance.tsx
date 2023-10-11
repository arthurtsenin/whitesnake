import classNames from "classnames";

import styles from "./Insurance.module.css";

import { Oscar } from "@/widget/Case/CasesHero/Oscar/Oscar";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";

import { INSURANCE_DATA } from "./data";
import { CasePageLayout } from "../CasePageLayout";

export const InsurancePage = () => {
  return (
    <section className={styles.section}>
      <Oscar {...INSURANCE_DATA.hero} />
      <CasePageLayout data={INSURANCE_DATA}>
        <CaseSolution title={INSURANCE_DATA.solution_title}>
          <div className={styles.container}>
            {INSURANCE_DATA.solution_info.items.map((item, index) => (
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
