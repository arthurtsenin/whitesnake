export const getLists = (data: string) =>
  data
    .match(/<ul>(.*?)<\/ul>/g)
    ?.map(
      (item) =>
        item
          .match(/<li>(.*?)<\/li>/g)
          ?.map((item) => item.replace(/(<(\/?[^>]+)>)/g, "")),
    );
