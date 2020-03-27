import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './components/Card/Card';

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
		<div>
			{articles.map((article, index) => {
				return <Card key={index} article={article} />
			})}
		</div>
	);
}

export default App;
