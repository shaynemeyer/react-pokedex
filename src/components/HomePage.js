import React, {Component} from 'react';
import './HomePage.css';
import SearchPokemon from './forms/SearchPokemon';
import SortRandom from './forms/SortRandom';
import SortByFilter from './forms/SortByFilter';
import PokeList from './PokeList';

class HomePage extends Component{
	render() {
		return (
			<div>
				<section className="section">
					<div className="title">Pokédex</div>
				</section>
				<section id="searchBar" className="search-bar">
					<SearchPokemon/>
				</section>
				<section id="pokeResults" className="poke-results">
					<div className="row button-row">
						<div className="col-sm-5 col-sm-offset-1">
							<SortRandom />
						</div>
						<div className="col-sm-5 col-sm-offset-1">
							<SortByFilter />
						</div>
					</div>
					<div id="poke-list" className="poke-list-row">
						<PokeList />
					</div>
				</section>
			</div>
		);
	}
}

export default HomePage;