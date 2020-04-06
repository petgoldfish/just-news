import Article from "./Article";

export default interface NewsApiArticleResponse {
	status: string;
	totalResults?: number;
	articles: Array<Article>;
}