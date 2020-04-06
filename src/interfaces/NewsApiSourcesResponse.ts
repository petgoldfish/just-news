import Source from "./Source";

export default interface NewsApiSourcesResponse {
	status: string;
	sources: Array<Source>;
}