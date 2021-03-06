import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';
import { connect } from "react-redux";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];
    const firstskill = profile.skills.trim().split(',')[0];
    const secondskill = profile.skills.trim().split(',')[1];
    const thirdskill = profile.skills.trim().split(',')[2];
    const fourthskill = profile.skills.trim().split(',')[3];

    // Skill List
    const skills = (

      <div className="p-3">
        <i className="fa fa-check" /> {firstskill}<br></br>
        <i className="fa fa-check" /> {secondskill}<br></br>
        <i className="fa fa-check" /> {thirdskill}<br></br>
        <i className="fa fa-check" /> {fourthskill}<br></br>

      </div>
    )
    const { isAuthenticated } = this.props.auth;
    return (

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{firstName}'s Bio</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                  <span>{profile.bio}</span>
                )}
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>

            </div>
            <hr />
            <h3 className="text-center text-info">Contact</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {isAuthenticated ? (
                  <h4>  &nbsp;&nbsp;{profile.contact}</h4>
                ) : (
                    <span>&nbsp;&nbsp;<a href="/register">Create Account</a> to view contact</span>
                  )}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ProfileAbout);
