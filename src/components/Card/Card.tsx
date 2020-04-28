import React from "react";
import Article from "../../interfaces/Article";
import { format } from "timeago.js"

import "./Card.css";
import CardSkeleton from "./CardSkeleton";

type PropType = {
	article?: Article;
};

export const Card = ({ article }: PropType) => {
	return article ? (
		<div className="card">
			<img
				className="card__image"
				src={article.urlToImage}
				alt=""
			/>
			<div className="card-text">
				<a
					className="card-text__title card-text__link"
					href={article.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{article.title}
				</a>
				<div className="card-text__metadata">
					{article.author} · {article.source.name} ·{" "}
					{format(article.publishedAt)}
				</div>
				<div className="card-text__summary">{article.description}</div>
			</div>
		</div>
	) : (
		<CardSkeleton />
	);
};

export default Card;
