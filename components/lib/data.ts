import { groq } from "next-sanity";
import { client } from "../../sanity/sanity.client";
import { DataProps } from "./types";

const query = groq`
  *[ _type == 'video' || _type == 'podcast' || _type == 'article' ]{
    "id": _id,  
    title,
    type,
    "thumbnail": thumbnail.asset->url,
    category,
    videoURL,
    url,
    summary,
    "createdAt": _createdAt
  }
`;

export const revalidate = 60;

const getData = async () => {
  let res = await client.fetch(query);
  const response: DataProps[] = await res;
  return response;
};

let data: DataProps[] = await getData();

export default data;
