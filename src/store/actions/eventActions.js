export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('events').add({
            ...event,
            authorFirstName: 'Vica',
            authorLastName: 'Rotaru',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_EVENT', event });
        }).catch((err) => {
            dispatch({ type: 'CREATE_EVENT_ERROR', err });
        })
    }
};