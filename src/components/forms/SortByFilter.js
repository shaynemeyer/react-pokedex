import React, {Component} from 'react';
import './SortByFilter.css';

class SortByFilter extends Component {
	render() {
		// let sortItemListItemStyle = {
		// 	backgroundColor: this.state.hover ? "#000" : "#666"
		// };
		//
		// let sortFiltersShow = {
		// 	display: this.showSortFilters ? "block" : "none"
		// };

		return (
			<div id="sortFilterBox" className="dropdown sort-filter-box">
				<button className="btn button" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					<span id="buttonText">Lowest Number (First)</span>
					<i className="fa fa-sort pull-right sort-icon"></i>
				</button>
				<ul className="dropdown-menu sort-items-box" aria-labelledby="dropdownMenu1">
					<li><a onClick={this.filterSelect} href="#">Sort results by…</a></li>
					<li><a onClick={this.filterSelect} href="#">Lowest Number (First)</a></li>
					<li><a onClick={this.filterSelect} href="#">Highest Number (First)</a></li>
					<li><a onClick={this.filterSelect} href="#">A-Z</a></li>
					<li><a onClick={this.filterSelect} href="#">Z-A</a></li>
				</ul>
			</div>
		);
	}
}

export default SortByFilter