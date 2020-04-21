import Source from "./Source";

export default interface Article {
	source: Source;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: Date;
	content: string;
}
