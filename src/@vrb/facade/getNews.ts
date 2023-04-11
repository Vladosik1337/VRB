import axios from 'axios';
import { Article } from '../types/Article';

const API_KEY = 'deaa851b38b04852b734ad3d7fc80ed1'; // Replace with your API key

export const getNews = async (page: number): Promise<Article[]> => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=10&page=${page}`
  );
  const articles: Article[] = response.data.articles.map((article: any) => ({
    id: article.title,
    image: article.urlToImage,
    author: article.author,
    description: article.description,
    title: article.title,
    pinned: false,
  }));
  return articles;
};
