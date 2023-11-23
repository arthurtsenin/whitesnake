export type VacanciesType = {
  id: string;
  premium: boolean;
  name: string;
  department: null;
  has_test: boolean;
  response_letter_required: boolean;
  area: { id: string; name: string; url: string };
  salary: null;
  type: { id: string; name: string };
  address: null;
  response_url: null;
  sort_point_distance: null;
  published_at: string;
  created_at: string;
  archived: boolean;
  apply_alternate_url: string;
  show_logo_in_search: null;
  insider_interview: null;
  url: string;
  alternate_url: string;
  relations: [];
  employer: {
    id: string;
    name: string;
    url: string;
    alternate_url: string;
    logo_urls: {
      [key: string]: string;
    };
    vacancies_url: string;
    accredited_it_employer: boolean;
    trusted: boolean;
  };
  snippet: {
    requirement: string;
    responsibility: string;
  };
  contacts: null;
  schedule: { id: string; name: string };
  working_days: [];
  working_time_intervals: [];
  working_time_modes: [];
  accept_temporary: boolean;
  professional_roles: [{ id: string; name: string }];
  accept_incomplete_resumes: boolean;
  experience: { id: string; name: string };
  employment: { id: string; name: string };
  adv_response_url: null;
  is_adv_vacancy: boolean;
};

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
