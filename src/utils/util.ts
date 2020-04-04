import axios, { AxiosResponse } from 'axios';
import { NewsApiResponse } from '../interfaces/NewsApiResponse';
import { NewsApiQueryParams } from '../interfaces/NewsApiQueryParams';

export const getArticles = async (queryParams: NewsApiQueryParams): Promise<AxiosResponse<NewsApiResponse>> => {
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
