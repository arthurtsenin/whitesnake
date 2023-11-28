import { VacanciesType, VacancyType } from "./type";

export const API_URL = `https://api.hh.ru/vacancies/?text=%D0%A3%D0%B0%D0%B9%D1%82%D0%A1%D0%BD%D0%B5%D0%B9%D0%BA&host=rabota.by`;

export async function getVacancies(): Promise<
  Record<string, Array<VacanciesType>>
> {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getVacancy(id: string): Promise<VacancyType> {
  const url = `https://api.hh.ru/vacancies/${id}?host=rabota.by`;
  const res = await fetch(`${url}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
