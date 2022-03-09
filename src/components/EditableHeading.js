import { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditableHeading extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.name,
			title: props.title,
		};
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value,
		});
		this.props.onNameChange(e);
	}

	handleTitleChange(e) {
		this.setState({
			title: e.target.value,
		});
		this.props.onTitleChange(e);
	}

	render() {
		return (
			<div>
				<h2>
					<input
						value={this.state.name}
						onChange={this.handleNameChange.bind(this)}
					/>
				</h2>
				<h3>
					<input
						value={this.state.title}
						onChange={this.handleTitleChange.bind(this)}
					/>
				</h3>
				<button onClick={this.props.onSave}>Save</button>
			</div>
		);
	}
}

EditableHeading.propTypes = {
	editMode: PropTypes.bool,
	name: PropTypes.string,
	title: PropTypes.string,
	onNameChange: PropTypes.func,
	onTitleChange: PropTypes.func,
};
