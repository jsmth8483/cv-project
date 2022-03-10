import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
	render() {
		return (
			<header>
				<h1>CV Editor</h1>
				<button className="btn-edit" onClick={this.props.onEdit}>
					{this.props.editMode ? 'Preview' : 'Edit'}
				</button>
			</header>
		);
	}
}

Header.propTypes = {
	editMode: PropTypes.bool,
	onEdit: PropTypes.func,
};
