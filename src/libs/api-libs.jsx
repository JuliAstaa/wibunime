import { RedirectType } from "next/navigation";

export const FetchingData = async (resource, query) => {
  const respone = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const results = await respone.json();
  return results;
};

export const FecthingNestedData = async (resource, objectProperty) => {
  const respone = await FetchingData(resource);
  return respone.data.flatMap((item) => item[objectProperty]);
};

export const RandomData = (data, gap) => {
  const firstNum = ~~(Math.random() * (data.length - gap) + 1);
  const secNum = firstNum + gap;
  const respone = {
    data: data.slice(firstNum, secNum),
  };

  return respone;
};
