import React, { useState, useEffect, ChangeEvent } from 'react';
import { Card } from './components/Card/Card';
import { Article } from './interfaces/Article';
import { Source } from './interfaces/Source';
import { getArticles, getNewsSources } from './utils/util';

import './App.css';

function App() {
	const [articles, setArticles] = useState<Array<Article>>([]);
	const [newsSources, setNewsSources] = useState<Array<Source>>([]);
	const [selectedSources, setSelectedSources] = useState<Array<string>>(['reuters']);
	const [searchTerm, setSearchTerm] = useState<string | undefined>();

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);
	
	const handleSourceSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedOptions = Array.prototype.filter
			.call(event.target.options, (option: HTMLOptionElement) => option.selected)
			.map((option: HTMLOptionElement) => option.value);
		setSelectedSources(selectedOptions);
	};

	useEffect(() => {
		getNewsSources().then(res => setNewsSources(res.data.sources));
	}, []);

	useEffect(() => {
		getArticles({
			sources: selectedSources.join(),
			q: searchTerm
		}).then(res => setArticles(res.data.articles));
	}, [selectedSources, searchTerm]);

	return (
		<div className="app">
			<div className="app__title">
				Just News
			</div>
			<div className="app__article-list">
				<input
					className="app__article-search"
					type="search"
					placeholder="Search..."
					onChange={handleSearch}
				/>
				<select
					multiple={true}
					value={selectedSources}
					onChange={handleSourceSelect}
				>
					{newsSources.map(source => {
						return <option key={source.id} value={source.id}>{source.name}</option>
					})}
				</select>
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
