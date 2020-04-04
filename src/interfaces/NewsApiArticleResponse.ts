import { Article } from "./Article";

export interface NewsApiArticleResponse {
	status: string;
	totalResults?: number;
	articles: Array<Article>;
}