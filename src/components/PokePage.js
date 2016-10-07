import React, {Component} from 'react';
import './PokePage.css';
import {Link} from 'react-router';
import {service} from '../service/HttpService';
import AbilityInfo from './details/AbilityInfo';

class PokePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pid: this.props.params.pid,
			next: 0,
			prev: 0,
			pokedata: [],
		};
	}

	componentDidMount() {
		this.setState({pid: this.props.params.pid});

		service.get(`pokemon/${this.props.params.pid}/`)
			.then(function(data){
					this.setState({pokedata: [data]});
		}.bind(this));
	}

	getPrevious() {
		return {'pid': 720, 'name': 'Hoppa', 'link': '/pokemon/720'};
	}

	getNext() {
		return {'pid': 2, 'name': 'Ivysaur', 'link': '/pokemon/2'};
	}

	render() {
		let {pid} = this.props.params;
		let previous = this.getPrevious();
		let next = this.getNext();

		const abilitiesInfo = this.state.pokedata.map(function(item){
			return <AbilityInfo height={item.height} weight={item.weight} species={item.species} abilities={item.abilities} />;
		});

		// const statsInfo = this.state.pokedata.map(function(item){
		// 	return <StatsInfo hp={item.hp} attack={item.attack} defense={item.defense} speed={item.speed} sp_atk={item.sp_atk} sp_def={item.sp_def}  />;
		// });
		//
		// const pokename = this.state.pokedata.map(function(item){
		// 	return <span style={PokeNameStyle}>{item.name}</span>;
		// });
		//
		// const descriptions = this.state.pokedata.map(function(item){
		// 	return <Description uri={item.descriptions[0]['resource_uri']}/>;
		// });
		//
		// const types = this.state.pokedata.map(function(item){
		// 	return <Types types={item.types}/>;
		// });
		//
		// const weakenesses = this.state.pokedata.map(function(item){
		// 	return <Weaknesses types={item.types}/>;
		// });

		return (
			<div>

				<section id="poke-nav" className="pokemon-pagination">
					<Link className="previous" to={previous.link}>
						<div className="pokedex-pokemon-pagination-wrapper pull-right">
							<i className="fa fa-chevron-circle-left margin-right pagination-arrow"></i>
							<span className="pagination-poke-id">#{previous.pid}</span>
							<span className="pagination-poke-name">{previous.name}</span>
						</div>
					</Link>

					<Link to={next.link}>
						<div className="pokedex-pokemon-pagination-wrapper pull-right">
							<span className="pagination-poke-name">{next.name}</span>
							<span className="pagination-poke-id">#{next.pid}</span>
							<i className="fa fa-chevron-circle-right margin-left pagination-arrow"></i>
						</div>
					</Link>
				</section>
				<div className="poke-detail-wrapper wrapper">
					<section id="poke-title">
						{/*{pokename}*/}
						<span className="poke-number"># {pid}</span>
					</section>

					<section id="pokemon-detail-section poke-detail-wrapper">
						<div className="col-xs-6">

							{/*<PokePic pid={this.state.pid} />*/}

							{/*{types}*/}

							{/*{weakenesses}*/}

						</div>
						<div className="version-descriptions col-xs-6">

							{/*{descriptions}*/}

							{abilitiesInfo}

							{/*{statsInfo}*/}

						</div>
					</section>

					<section>
						<Link to="/" className="btn btn-warning pull-right explore-more-button">Explore More Pokémon</Link>
					</section>
				</div>


			</div>
		);
	}
}

export default PokePage