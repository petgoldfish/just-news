import axios, { AxiosResponse } from "axios";
import NewsApiArticleResponse from "../interfaces/NewsApiArticleResponse";
import NewsApiQueryParams from "../interfaces/NewsApiQueryParams";
import NewsApiSourcesResponse from "../interfaces/NewsApiSourcesResponse";

export const getNewsSources = async (): Promise<
	AxiosResponse<NewsApiSourcesResponse>
> => {
	return await axios.get("https://newsapi.org/v2/sources", {
		headers: {
			"X-Api-Key": process.env.REACT_APP_NEWS_API_KEY,
		},
	});
};

export const getArticles = async ({
	sources,
	q,
}: NewsApiQueryParams): Promise<AxiosResponse<NewsApiArticleResponse>> => {
	return await axios.get("https://newsapi.org/v2/top-headlines", {
		headers: {
			"X-Api-Key": process.env.REACT_APP_NEWS_API_KEY,
		},
		params: {
			sources,
			q,
		},
	});
};
