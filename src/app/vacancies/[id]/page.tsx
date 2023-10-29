import { VacancyPageLayout } from "@/page/dynamic/vacancy/Vacancy.page";
import PageScript from "@/shared/analitics/PageScript";
import { getLists } from "@/shared/utils/getVacancyLists";
import { getSubtitle } from "@/shared/utils/getVacancySubtitle";
import { getTitles } from "@/shared/utils/getVacancyTitles";

export type VacancyType = {
  id: string;
  premium: boolean;
  billing_type: { id: string; name: string };
  relations: [];
  name: string;
  insider_interview: null;
  response_letter_required: boolean;
  area: {
    id: string;
    name: string;
    url: string;
  };
  salary: null;
  type: { id: string; name: string };
  address: {
    city: string;
    street: string;
    building: string;
    lat: number;
    lng: number;
    description: null;
    raw: string;
    metro: null;
    metro_stations: [];
  };
  allow_messages: true;
  experience: { id: string; name: string };
  schedule: { id: string; name: string };
  employment: { id: string; name: string };
  department: null;
  contacts: null;
  description: string;
  branded_description: null;
  vacancy_constructor_template: null;
  key_skills: Array<{ name: string }>;
  accept_handicapped: boolean;
  accept_kids: boolean;
  archived: boolean;
  response_url: null;
  specializations: [];
  professional_roles: [
    {
      id: string;
      name: string;
    },
  ];
  code: null;
  hidden: boolean;
  quick_responses_allowed: boolean;
  driver_license_types: [];
  accept_incomplete_resumes: boolean;
  employer: {
    id: string;
    name: string;
    url: string;
    alternate_url: string;
    logo_urls: Record<string, string>;
    vacancies_url: string;
    accredited_it_employer: boolean;
    trusted: boolean;
  };
  published_at: string;
  created_at: string;
  initial_created_at: string;
  negotiations_url: null;
  suitable_resumes_url: null;
  apply_alternate_url: string;
  has_test: boolean;
  test: null;
  alternate_url: string;
  working_days: [];
  working_time_intervals: [];
  working_time_modes: [];
  accept_temporary: boolean;
  languages: [];
};

async function getData(id: string): Promise<VacancyType> {
  const url = `https://api.hh.ru/vacancies/${id}?host=rabota.by`;
  const res = await fetch(`${url}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function VacancyPage({
  params,
}: {
  params: { id: string };
}) {
  const vacancy = await getData(params.id);
  const subtitle = getSubtitle(vacancy.description, vacancy.name) || [""];
  const titles = getTitles(vacancy.description);
  const lists = getLists(vacancy.description);

  return (
    <>
      <PageScript />
      <div className="container">
        <VacancyPageLayout
          jobTitle={vacancy.name}
          path={vacancy.alternate_url}
          title={vacancy.name}
          subtitle={subtitle[0]}
          titles={titles}
          lists={lists}
        />
      </div>
    </>
  );
}
