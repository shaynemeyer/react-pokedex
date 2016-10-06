import React, {Component} from 'react';
import './PokeListItem.css';


const imageUrlBase = "/images/Pokemon/hd/";

class PokeListItem extends Component {
	render() {
		return (
			<div className="panel panel-default col-xs-3" style={PanelWrapperStyle}>
				<Link to={`/pokemon/${this.props.pid}`}>
					<div className="panel-heading">
						<figure style={FigureStyle}>
							<img src={`${imageUrlBase}${this.props.pid}.png`} width="75%" alt={this.props.name} style={ImageStyle} />
						</figure>
					</div>
					<div className="panel-body">


						<span style={NotchStyle}></span>
						<div className="pokemon-info" style={PokemonInfoStyle}>
							<p className="pokemon-id" style={PokemonIdStyle}>
								# {this.props.pid}
							</p>
							<h3 style={NameStyle}>{this.props.name}</h3>
							<div className="abilities" style={AbilitiesStyle}>
								{abilities}
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

export default PokeListItem