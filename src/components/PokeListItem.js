import React, {Component} from 'react';
import {Link} from 'react-router';
import './PokeListItem.css';


const imageUrlBase = "/images/Pokemon/hd/";

class PokeListItem extends Component {
	render() {
		return (
			<div className="panel panel-default col-xs-3 panel-wrapper">
				<Link to={`/pokemon/${this.props.pid}`}>
					<div className="panel-heading">
						<figure>
							<img src={`${imageUrlBase}${this.props.pid}.png`} width="75%" alt={this.props.name} />
						</figure>
					</div>
					<div className="panel-body">


						<span className="notch"></span>
						<div className="pokemon-info">
							<p className="pokemon-id">
								# {this.props.pid}
							</p>
							<h3 className="name">{this.props.name}</h3>
							<div className="abilities">
								{/*{abilities}*/}
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

export default PokeListItem