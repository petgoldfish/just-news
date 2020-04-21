import React, { ChangeEvent, useContext } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";

import "./ArticleFilter.css";

export const ArticleFilter = () => {
	const {
		newsSources,
		setSearchTerm,
		selectedSources,
		setSelectedSources,
	} = useContext(ArticleContext);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(event.target.value);

	const handleSourceSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedOptions = Array.prototype.filter
			.call(
				event.target.options,
				(option: HTMLOptionElement) => option.selected
			)
			.map((option: HTMLOptionElement) => option.value);

		setSelectedSources(selectedOptions.length ? selectedOptions : ["reuters"]);
	};

	return (
		<div className="article-filter">
			<input
				className="article-filter__input article-filter__input--searchbox"
				type="search"
				placeholder="Search..."
				onChange={handleSearch}
			/>

			<select
				className="article-filter__input article-filter__input--source-select"
				multiple={true}
				value={selectedSources}
				onChange={handleSourceSelect}
			>
				{newsSources.map((source) => {
					return (
						<option
							className="article-filter__source-option"
							key={source.id}
							value={source.id}
						>
							{source.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default ArticleFilter;
