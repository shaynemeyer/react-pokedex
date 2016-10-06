import React, {Component} from 'react';
import './PokeList.css';
import PokeListItem from './PokeListItem';
import {pokedex} from '../data/pokedex';

class PokeList extends Component {
	render() {
		const listItems = pokedex.map(function(item){
			return <PokeListItem key={item.pid} pid={item.pid} name={item.name} next={item.next} prev={item.prev}/>;
		});

		return (
			<div>
				{listItems}
			</div>
		);
	}
}

export default PokeList