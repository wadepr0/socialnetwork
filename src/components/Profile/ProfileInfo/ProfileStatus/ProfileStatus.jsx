import React from 'react';
import classes from './ProfileStatus.module.scss';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditorMode = () => {
        this.setState({
            editMode: true
        })

    }

    deactivateEditorMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)

    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (<div className={classes.status}>
            {!this.state.editMode
                ? <div>
                    <span onDoubleClick={this.activateEditorMode}>{this.props.status || 'I don\'t have status yet'}</span>
                </div >
                : <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditorMode} value={this.state.status}></input>
                </div >}
        </div>);
    }

}

export default ProfileStatus;