import React, {Component} from 'react';
import './HomePage.css';

class HomePage extends Component{
	render() {
		return (
			<div>
				<section className="section">
					<div className="title">Pokédex</div>
				</section>
				<section id="searchBar" className="search-bar">
				</section>
				<section id="pokeResults" className="poke-results">
					<div className="row button-row">
						<div className="col-sm-5 col-sm-offset-1">
						</div>
						<div className="col-sm-5 col-sm-offset-1">
						</div>
					</div>
					<div id="poke-list" className="poke-list-row">
					</div>
				</section>
			</div>
		);
	}
}

export default HomePage;