import axios from "axios";
import type { Article } from "../types/articleList";

interface ArcticlesHttpResponse {
  hits: Article[];
  nbPages: number;
}

export const fetchArticles = async (topic: string, page: number) => {
  const rensponce = await axios.get<ArcticlesHttpResponse>(
    "https://hn.algolia.com/api/v1/search",
    {
      params: {
        query: topic,
        page: page,
      },
    }
  );

  return rensponce.data;
};
