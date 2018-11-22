const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
});

exports.eventCreated = functions.firestore
    .document('events/{eventId}')
    .onCreate(doc => {
        const event = doc.data();
        const notification = {
            content: 'Added a new event',
            user: `${event.authorFirstName} ${event.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {
            const newUser = doc.data();
            const notification = {
                content: 'Joined the party',
                user: `${newUser.authorFirstName} ${newUser.authorLastName}`,
                time: admin.firestore.FieldValue.serverTimestamp().toDate()
            }
            return createNotification(notification);
        })
    })
