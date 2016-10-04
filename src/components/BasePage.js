import React, {Component} from 'react';
import './BasePage.css';

class BasePage extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div>
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BasePage