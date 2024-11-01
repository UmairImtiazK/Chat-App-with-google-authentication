const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.autoReply = functions.firestore
  .document('messages/{messageId}')
  .onCreate((snap, context) => {
    const newValue = snap.data();

    // Agar sender system hai, to reply mat karna
    if (newValue.sender === 'system') {
      return null;
    }

    const autoReplyMessage = {
      text: 'This is an auto-reply message.',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      sender: 'system'
    };

    return admin.firestore().collection('messages').add(autoReplyMessage);
  });
