export const getTitles = (data: string) =>
  data
    .match(/<strong>(.*?)<\/strong>/g)
    ?.filter((item) => item.includes(":"))
    .map((item) => item.replace(/(<(\/?[^>]+)>)/g, ""));
