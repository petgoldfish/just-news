import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './components/Card/Card';

import './App.css';

function App() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
			setArticles(response.data.articles);
		};

		fetchArticles();
	}, []);

	return (
		<div className="app">
			<div className="app__title">
				Just News
			</div>
			<div className="app__article-list">
				{articles.map((article, index) => {
					return <Card key={index} article={article} />
				})}
			</div>
		</div>
	);
}

export default App;
