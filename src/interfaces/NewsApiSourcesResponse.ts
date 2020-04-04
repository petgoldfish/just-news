import { Source } from "./Source";

export interface NewsApiSourcesResponse {
	status: string;
	sources: Array<Source>;
}