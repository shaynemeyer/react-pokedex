import React, {Component} from 'react';
import './SortRandom.css';

class SortRandom extends Component {
	onRandomize(e){
		console.log("randomized clicked");
	}

	render() {
		return (
			<div id="sort-random-box">
				<button className="btn" type="button" id="sort-random-btn" onClick={this.onRandomize}>
					<i className="fa fa-refresh sort-icon"></i>
					Surprise Me!
				</button>
			</div>
		);
	}
}

export default SortRandom