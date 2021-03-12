import React, {Component, useState, useEffect} from 'react'

/**
 * 
 * @param props
 * @returns 
 */

export const FriendStatusHook = props => {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

        return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    if (isOnline === null) return 'Loading...';

    return isOnline ? 'onLine' : 'ofLine';
}


class FriendStatus extends Component {
    constructor(props) {
        super(props);
        this.state = { isOnline: null };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {
        ChatAPI.subscribeToFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }
    componentWillUnmount() {
        ChatAPI.unsubscribeFromFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }
    handleStatusChange(status) {
        this.setState({ isOnline: status.isOnline });
    }

    render() {
        if (this.state.isOnline === null) {
            return 'Loading...';
    }
        return this.state.isOnline ? 'onLine' : 'ofLine';
    }
}