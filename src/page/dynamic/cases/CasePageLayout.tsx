import { FC, ReactNode } from "react";

import { Container } from "@/shared";
import { CaseChallenge } from "@/widget/Case/CaseChallenge/CaseChallenge";
import { CaseCustomer } from "@/widget/Case/CaseCustomer/CaseCustomer";
import { CaseResults } from "@/widget/Case/CaseResults/CaseResults";
import { CaseTeam } from "@/widget/Case/CaseTeam/CaseTeam";
import { CaseTechnologyStack } from "@/widget/Case/CaseTechnologyStack/CaseTecnologyStack";
import { Divider } from "@/widget/Case/ui/Divider/Divider";

import { CaseDataType } from "./types";

type CasePageLayoutProps = {
  children: ReactNode;
  data: CaseDataType;
};

export const CasePageLayout: FC<CasePageLayoutProps> = ({ children, data }) => {
  return (
    <Container>
      <CaseCustomer
        title={data.customer_title}
        stats={data.customer_stats}
        info={data.customer_info}
      />
      <Divider />
      <CaseChallenge title={data.challenge_title} info={data.challenge_info} />
      <Divider />

      {children}

      <Divider />
      <CaseResults
        title={data.results_title}
        text={data.results_info}
        cubes={data.results_cubes}
      />
      <Divider />
      <CaseTeam title={data.team_title} data={data.team_info} />
      <Divider />
      <CaseTechnologyStack title={data.stack_title} stack={data.stack_info} />
    </Container>
  );
};
