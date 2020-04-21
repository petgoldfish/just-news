import React, { useContext } from "react";
import { v1 as uuidv1 } from "uuid";
import Card from "../Card/Card";
import { ArticleContext } from "../../contexts/ArticleContext";

import "./ArticleList.css";

export const ArticleList = () => {
	const { articles } = useContext(ArticleContext);

	return (
		<div className="article-list">
			{articles.map((article) => {
				return <Card key={uuidv1()} article={article} />;
			})}
		</div>
	);
};

export default ArticleList;
