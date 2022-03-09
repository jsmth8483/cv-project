import { Component } from 'react';
import PropTypes from 'prop-types';

export default class StaticHeading extends Component {
	render() {
		const renderEditButton = () => {
			if (this.props.editMode) {
				return <button onClick={this.props.onEdit}>Edit</button>;
			}
		};
		return (
			<div>
				<h1>{this.props.name}</h1>
				<h2>{this.props.title}</h2>
				{renderEditButton()}
			</div>
		);
	}
}

StaticHeading.propTypes = {
	editMode: PropTypes.bool,

	name: PropTypes.string,
	title: PropTypes.string,
	onEdit: PropTypes.func,
};
