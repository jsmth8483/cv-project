import { Component } from 'react';
import PropTypes from 'prop-types';

export default class StaticHeading extends Component {
	render() {
		const editModeClass = 'edit-mode';
		const renderEditButton = () => {
			if (this.props.editMode) {
				return <button onClick={this.props.onEdit}>Edit</button>;
			}
		};
		return (
			<div className={['cv-heading', editModeClass].join(' ')}>
				<h2>{this.props.name}</h2>
				<h3>{this.props.title}</h3>
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
