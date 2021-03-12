import React, {useState, useDebugValue} from 'react'

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    useDebugValue(isOnline ? 'Valodik Online' : 'Valodik Ofline');

    return isOnline;
}