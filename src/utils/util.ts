import axios, { AxiosResponse } from 'axios';
import { NewsApiArticleResponse } from '../interfaces/NewsApiArticleResponse';
import { NewsApiQueryParams } from '../interfaces/NewsApiQueryParams';

export const getArticles = async (queryParams: NewsApiQueryParams): Promise<AxiosResponse<NewsApiArticleResponse>> => {
	return await axios.get('https://newsapi.org/v2/top-headlines', {
		headers: {
			'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
		},
		params: {
			sources: queryParams.sources,
			q: queryParams.q
		}
	});
};
