import { Component } from 'react';
import PropTypes from 'prop-types';
import EditableHeading from './EditableHeading';
import StaticHeading from './StaticHeading';

export default class Heading extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			title: props.title,
			editable: false,
		};
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value,
		});
	}

	handleTitleChange(e) {
		this.setState({
			title: e.target.value,
		});
	}

	handleEditable() {
		this.setState({
			editable: true,
		});
	}

	handleSave() {
		this.setState({
			editable: false,
		});
	}

	render() {
		const { editMode } = this.props;
		const { name, title, editable } = this.state;

		let element;
		if (editable && editMode) {
			element = (
				<EditableHeading
					editMode={editMode}
					name={this.state.name}
					title={this.state.title}
					onNameChange={this.handleNameChange.bind(this)}
					onTitleChange={this.handleTitleChange.bind(this)}
					onSave={this.handleSave.bind(this)}
				/>
			);
		} else {
			element = (
				<StaticHeading
					editMode={editMode}
					name={name}
					title={title}
					onEdit={this.handleEditable.bind(this)}
				/>
			);
		}
		return element;
	}
}

Heading.propTypes = {
	editMode: PropTypes.bool,
	name: PropTypes.string,
	title: PropTypes.string,
};
