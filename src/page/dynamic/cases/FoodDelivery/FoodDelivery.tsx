import classNames from "classnames";

import styles from "./FoodDelivery.module.css";

import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";

import { FOOD_DELIVERY_DATA } from "./data";
import { CasePageLayout } from "../CasePageLayout";

export const FoodDeliveryPage = () => {
  return (
    <CasePageLayout data={FOOD_DELIVERY_DATA}>
      <CaseSolution
        title={FOOD_DELIVERY_DATA.solution_title}
        subtitle={FOOD_DELIVERY_DATA.solution_info.subtitle}
      >
        <div className={styles.container}>
          {FOOD_DELIVERY_DATA.solution_info.items.map((item, index) => (
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
  );
};
