import React from 'react';
import Article from '../../interfaces/Article';
import './Card.css';

type PropType = {
	article: Article
};

export const Card = (props: PropType) => {
	const article = props.article;
	return (
		<div className="card">
			<img className="card__image" src={article.urlToImage} alt={article.description} />
			<div className="card-text">
				<div className="card-text__title">
					{article.title}
				</div>
				<div className="card-text__summary">
					{article.description}
				</div>
			</div>
		</div>
	)
};

export default Card;