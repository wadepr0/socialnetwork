import React from 'react';
import { connect } from 'react-redux'
import { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, requestUsers, onPageChanged, followUsers, unFollowUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from './Loader/Preloader'
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getIsFollowingProgress, getUsers } from '../../redux/users-selectors';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers()
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChanged(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <div>
                {this.props.isFetching
                    ?
                    <Preloader />
                    :
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        isFollowingProgress={this.props.isFollowingProgress}
                        followUsers={this.props.followUsers}
                        unFollowUsers={this.props.unFollowUsers} />
                }
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state)
    }
}

let mapDispatchToProps = { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, requestUsers, onPageChanged, followUsers, unFollowUsers }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(UsersContainer)
