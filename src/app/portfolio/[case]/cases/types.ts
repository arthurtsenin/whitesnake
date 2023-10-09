import { StaticImageData } from "next/image";

export type CaseDataType = {
  customer_title: string;
  customer_stats: CustomerStats;
  customer_info: Array<string>;
  challenge_title: string;
  challenge_info: Array<string>;
  solution_title: string;
  solution_info: SolutionInfo;
  results_title: string;
  results_info: ResultsInfo;
  results_cubes: Array<ResultsCube>;
  team_title: string;
  team_info: Array<TeamInfo>;
  stack_title: string;
  stack_info: StackInfo;
};

export type CustomerStats = {
  направление: string;
  страна: string;
  "дата старта": string;
};

export type SolutionItemType = {
  id: number;
  title?: Array<string>;
  text: Array<string>;
  image: string | StaticImageData;
};

export type SolutionInfo = {
  subtitle?: Array<string>;
  items: Array<SolutionItemType>;
};

export type ResultsInfo = {
  list?: List;
  summary: string;
};

export type List = {
  list_title: string;
  list_items: Array<ListItem>;
};

export type ListItem = {
  mark: string;
  text: string;
  id: number;
};

export type ResultsCube = {
  title: string;
  subtitle: string;
};

export type TeamInfo = {
  id: number;
  teamName: string;
  teamCount: number;
};

export type StackInfo = Record<string, Array<string>>;
