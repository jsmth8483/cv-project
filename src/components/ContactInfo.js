import { Component } from 'react';
import PropTypes from 'prop-types';
import EditableContactInfo from './EditableContactInfo';
import StaticContactInfo from './StaticContactInfo';

export default class ContactInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: props.phone,
			email: props.email,
			location: props.location,
			linkedInLink: props.linkedInLink,
			editable: false,
		};

		this.handlePhoneChange = this.handlePhoneChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleLocationChange = this.handleLocationChange.bind(this)
		this.handleLinkedInLinkChange = this.handleLinkedInLinkChange.bind(this)
	}

	handlePhoneChange(e) {
		this.setState({
			phone: e.target.value,
		});
	}

	handleEmailChange(e) {
		this.setState({
			email: e.target.value,
		});
	}

	handleLocationChange(e) {
		this.setState({
			location: e.target.value,
		});
	}

	handleLinkedInLinkChange(e) {
		this.setState({
			linkedInLink: e.target.value,
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
		const { editable, phone, email, location, linkedInLink } = this.state;
		let element;
		if (editable && editMode) {
			element = (
				<EditableContactInfo
					editMode={editMode}
					phone={phone}
					email={email}
					location={location}
					linkedInLink={linkedInLink}
					onPhoneChange={this.handlePhoneChange}
					onEmailChange={this.handleEmailChange}
					onLocationChange={this.handleLocationChange}
					onLinkedInLinkChange={this.handleLinkedInLinkChange}
					onSave={this.handleSave.bind(this)}
				/>
			);
		} else {
			element = (
				<StaticContactInfo
					editMode={editMode}
					email={email}
					phone={phone}
					location={location}
					linkedInLink={linkedInLink}
					onEdit={this.handleEditable.bind(this)}
				/>
			);
		}
		return element;
	}
}

ContactInfo.propTypes = {
    editMode: PropTypes.bool,
	phone: PropTypes.string, 
	email: PropTypes.string, 
	location: PropTypes.string, 
	linkedInLink: PropTypes.string
};
