import { Component } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';

export default class CVWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="cv-window">
				<Heading name="Name" title="Job Title" editMode={this.props.editMode} />
			</div>
		);
	}
}

CVWindow.propTypes = {
	editMode: PropTypes.bool,
};
