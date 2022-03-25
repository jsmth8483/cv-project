import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class StaticContactInfo extends Component {
	render() {
		const { phone, email, location, linkedInLink } = this.props;
		const renderEditButton = () => {
			if (this.props.editMode) {
				return <Button text="Edit" onClickButton={this.props.onEdit}/>
			}
		};
		return (
			<div className="contact-info info-section">
				<div className="info-header">
					<h4>Contact</h4>
					{renderEditButton()}
				</div>
				<p>{email}</p>
				<p>{phone}</p>
				<p>{location}</p>
				<p>
					<a href={linkedInLink}>LinkedIn</a>
				</p>
			</div>
		);
	}
}


StaticContactInfo.propTypes = {
    editMode: PropTypes.bool,
	phone: PropTypes.string, 
	email: PropTypes.string, 
	location: PropTypes.string, 
	linkedInLink: PropTypes.string,
	onEdit: PropTypes.func
};
