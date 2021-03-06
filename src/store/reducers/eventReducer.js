const initState = {
    events: [
        {
            id: '',
            title: '',
            content: ''
        }
    ]
}

const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            console.log('created event', action.event);
            return state;
        case 'CREATE_EVENT_ERROR':
            console.log('create event error', action.err);
            return state;
        default:
            return state;
    }
}

export default eventReducer;