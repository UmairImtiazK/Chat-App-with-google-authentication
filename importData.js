const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Update with your service account key path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();

async function importMessages() {
  try {
    const messages = require('./path/to/messages.json'); // Update with your messages JSON path
    const batch = firestore.batch();

    messages.messages.forEach((message) => {
      const messageRef = firestore.collection('messages').doc(); // Assuming 'messages' is your collection name
      batch.set(messageRef, message);
    });

    await batch.commit();
    console.log('Data import successful!');
  } catch (error) {
    console.error('Error importing data: ', error);
  }
}

importMessages();
