import styles from "./Fp&a.module.css";

import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";

import { FPA_DATA } from "./data";
import { CasePageLayout } from "../CasePageLayout";

export const FpaPage = () => {
  return (
    <CasePageLayout data={FPA_DATA}>
      <CaseSolution
        title={FPA_DATA.solution_title}
        subtitle={FPA_DATA.solution_info.subtitle}
      >
        <div className={styles.container}>
          {FPA_DATA.solution_info.items.map((item) => (
            <div key={item.id} className={styles.item}>
              <SolutionItem text={item.text} image={item.image} />
            </div>
          ))}
        </div>
      </CaseSolution>
    </CasePageLayout>
  );
};
