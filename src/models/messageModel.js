// In-memory data store for messages
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

// Get all messages
exports.getAllMessages = () => {
    return messages;
};

// Get a single message by index
exports.getMessageById = (id) => {
    const messageId = parseInt(id);
    if (messageId >= 0 && messageId < messages.length) {
        return messages[messageId];
    }
    return null;
};

// Create a new message
exports.createMessage = (text, user) => {
    const newMessage = {
        text: text,
        user: user,
        added: new Date()
    };
    messages.push(newMessage);
    return newMessage;
};

// Get total message count
exports.getMessageCount = () => {
    return messages.length;
};