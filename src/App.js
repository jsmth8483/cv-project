import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import CVWindow from './components/CVWindow';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
		};
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit() {
		this.setState({
			editMode: !this.state.editMode,
		});
	}

	render() {
		const { editMode } = this.state;
		return (
			<div className="App">
				<Header editMode={editMode} onEdit={this.handleEdit} />
				<CVWindow editMode={editMode} />
			</div>
		);
	}
}
