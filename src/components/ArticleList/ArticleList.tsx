import React, { useContext } from 'react';
import Card from '../Card/Card';

import './ArticleList.css';
import { ArticleContext } from '../../contexts/ArticleContext';

export const ArticleList = () => {
	const { articles } = useContext(ArticleContext);

	return (
		<div className="article-list">
			{articles.map((article, index) => {
				return <Card key={index} article={article} />;
			})}
		</div>
	);
};

export default ArticleList;
