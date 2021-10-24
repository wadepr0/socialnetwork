import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileId, updateStatus, getStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
//import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.currentUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileId(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentUserId: state.auth.id,
    isAuth: state.auth.isAuth
})


let mapDispatchToProps = { getUserProfileId, getStatus, updateStatus }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);