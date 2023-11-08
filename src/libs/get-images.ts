import { Dispatch, SetStateAction } from "react";
import { Images } from "./interfaces";

const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY ?? "",
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST ?? "",
  },
};

/*====Get images====*/
export const getImages = async (
  query: string,
  safeSearch: string,
  setResult: Dispatch<SetStateAction<Images[]>>
) => {
  try {
    /*====We validate that the length of the query is adequate====*/
    const response = await fetch(
      query !== undefined && query.length > 0
        ? `https://bing-image-search1.p.rapidapi.com/images/search?q=${query}&safeSearch=${safeSearch}`
        : `https://bing-image-search1.p.rapidapi.com/images/search?q=images&safeSearch=${safeSearch}`,
      option
    );

    const data = await response.json();
    setResult(data.value);
  } catch (error) {
    console.log(error);
  }
};
