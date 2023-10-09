import classNames from "classnames";

import styles from "./FoodDelivery.module.css";

import { Container } from "@/shared";
import { CaseChallenge } from "@/widget/Case/CaseChallenge/CaseChallenge";
import { CaseCustomer } from "@/widget/Case/CaseCustomer/CaseCustomer";
import { CaseResults } from "@/widget/Case/CaseResults/CaseResults";
import { CaseSolution } from "@/widget/Case/CaseSolution/CaseSolution";
import { SolutionItem } from "@/widget/Case/CaseSolution/ui/CaseItem/SolutionItem";
import { CaseTeam } from "@/widget/Case/CaseTeam/CaseTeam";
import { CaseTechnologyStack } from "@/widget/Case/CaseTechnologyStack/CaseTecnologyStack";
import { Divider } from "@/widget/Case/ui/Divider/Divider";

import { FOOD_DELIVERY_DATA } from "./data";

export const FoodDelivery = () => {
  return (
    <Container>
      <CaseCustomer
        title={FOOD_DELIVERY_DATA.customer_title}
        stats={FOOD_DELIVERY_DATA.customer_stats}
        info={FOOD_DELIVERY_DATA.customer_info}
      />
      <Divider />
      <CaseChallenge
        title={FOOD_DELIVERY_DATA.challenge_title}
        info={FOOD_DELIVERY_DATA.challenge_info}
      />
      <Divider />
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
      <Divider />
      <CaseResults
        title={FOOD_DELIVERY_DATA.results_title}
        text={FOOD_DELIVERY_DATA.results_info.summary}
        cubes={FOOD_DELIVERY_DATA.results_cubes}
      />
      <Divider />
      <CaseTeam
        title={FOOD_DELIVERY_DATA.team_title}
        data={FOOD_DELIVERY_DATA.team_info}
      />
      <Divider />
      <CaseTechnologyStack
        title={FOOD_DELIVERY_DATA.stack_title}
        stack={FOOD_DELIVERY_DATA.stack_info}
      />
    </Container>
  );
};
