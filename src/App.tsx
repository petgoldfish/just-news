import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './components/Card/Card';

import './App.css';

function App() {
	const [articles, setArticles] = useState([]);
	
	useEffect(() => {
		const serverURL = process.env.REACT_APP_API;
		const fetchArticles = async () => {
			const response = await axios.get(`${serverURL}/newsapi`);
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
			<footer className="app__footer">
				Made with <span role="img" aria-label="love">❤️</span> by <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/petgoldfish">Raghav Sai</a> and powered by <a rel="noopener noreferrer" target="_blank" href="https://newsapi.org">NewsApi.org</a>
			</footer>
		</div>
	);
}

export default App;
