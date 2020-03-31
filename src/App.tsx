import React, { useState, useEffect } from 'react';
import { Card } from './components/Card/Card';
import { Article } from './interfaces/Article';

import './App.css';

function App() {
	const [articles, setArticles] = useState<Array<Article>>([]);

	useEffect(() => {
		const serverURL = process.env.REACT_APP_API;
		fetch(`${serverURL}/newsapi`)
			.then(res => res.json())
			.then(response => {
				setArticles(response.articles);
			});
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
