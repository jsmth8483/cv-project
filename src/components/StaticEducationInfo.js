import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class StaticEducationInfo extends Component {
	render() {
		const { degree, major, school, startDate, endDate, location, editable } =
			this.props;
		const renderEditButton = () => {
			if (this.props.editMode) {
				return <Button text="Edit" onClickButton={this.props.onEdit}/>
			}
		};
		return (
			<div className="education-info info-section">
                <div className="info-header">
                    <h4>Education</h4>
                    {renderEditButton()}
                </div>
				
				<p>{degree}</p>
				<p>{major}</p>
				<p>{school}</p>
				<p>
					{startDate} - {endDate}
				</p>
				<p>{location}</p>
			</div>
		);
	}
}

StaticEducationInfo.propTypes = {
    editMode: PropTypes.bool,
	degree: PropTypes.string, 
	major: PropTypes.string, 
	location: PropTypes.string, 
	startDate: PropTypes.string,
	endDate: PropTypes.string,
    onEdit: PropTypes.func
};
