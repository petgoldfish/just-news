import { throttle } from "lodash";
import axios, { AxiosResponse } from "axios";
import { NewsApiQueryParams } from "../interfaces/NewsApiQueryParams";
import { NewsApiResponse } from "../interfaces/NewsApiResponse";

export const throttledApiCall = throttle(async (queryParams: NewsApiQueryParams): Promise<AxiosResponse<NewsApiResponse>> => {
	return await axios.get<NewsApiResponse>('https://newsapi.org/v2/top-headlines', {
		headers: {
			'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY
		},
		params: {
			sources: queryParams.sources,
			q: queryParams.q
		}
	});
}, 1000);
