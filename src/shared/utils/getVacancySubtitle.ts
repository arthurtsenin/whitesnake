export const getSubtitle = (data: string, flag: string) =>
  data
    .match(/<p>(.*?)<\/p>/g)
    ?.filter((item) => item.includes(flag))
    .map((item) => item.replace(/(<(\/?[^>]+)>)/g, ""));
