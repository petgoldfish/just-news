import React from 'react';
import './Card.css';

export const Card = props => {
	const article = { ...props.article };
	return (
		<div className="card">
			<img className="card__image" src={article.urlToImage} />
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
