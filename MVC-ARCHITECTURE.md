# Message Board - MVC Architecture

## 📁 Complete Project Structure

```
project-root/
├── app.js                          # Application entry point
├── package.json
└── src/
    ├── models/                     # MODEL LAYER
    │   └── messageModel.js         # Data logic & operations
    ├── controllers/                # CONTROLLER LAYER
    │   ├── indexController.js      # Home & message detail logic
    │   └── messageController.js    # New message form logic
    ├── routes/                     # ROUTING LAYER
    │   ├── indexRouter.js          # URL mappings for index
    │   └── newMessageRouter.js     # URL mappings for new messages
    ├── views/                      # VIEW LAYER
    │   ├── index.ejs               # Home page template
    │   ├── form.ejs                # New message form template
    │   ├── message.ejs             # Message detail template
    │   └── error.ejs               # Error page template
    └── styles/
        └── styles.css              # Application styles
```

## 🏗️ MVC Pattern Explained

### **MODEL** (`src/models/messageModel.js`)
**Responsibility:** Manage data and business rules

**What it does:**
- Stores the messages array
- Provides functions to interact with data
- Handles data validation and operations

**Functions:**
- `getAllMessages()` - Returns all messages
- `getMessageById(id)` - Returns a specific message
- `createMessage(text, user)` - Creates and stores a new message
- `getMessageCount()` - Returns total message count

**Example:**
```javascript
const message = messageModel.getMessageById(5);
messageModel.createMessage("Hello!", "John");
```

### **VIEW** (`src/views/*.ejs`)
**Responsibility:** Present data to the user

**What it does:**
- Renders HTML with dynamic data
- Displays information received from controllers
- User interface and presentation logic

**Files:**
- `index.ejs` - Shows list of all messages
- `form.ejs` - Form to create new message
- `message.ejs` - Detailed view of one message
- `error.ejs` - Error messages

### **CONTROLLER** (`src/controllers/`)
**Responsibility:** Handle requests and coordinate between Model and View

**What it does:**
- Receives requests from routes
- Calls model functions to get/manipulate data
- Passes data to views for rendering
- Handles business logic and validation

**indexController.js:**
- `getIndex()` - Get all messages and render index page
- `getMessageDetail()` - Get one message and render detail page

**messageController.js:**
- `showNewMessageForm()` - Render the new message form
- `createMessage()` - Process form, create message, redirect

### **ROUTES** (`src/routes/`)
**Responsibility:** Map URLs to controller functions

**What it does:**
- Defines URL patterns
- Specifies HTTP methods (GET, POST)
- Delegates to appropriate controller functions
- Acts as the "table of contents" for your API

**Example:**
```javascript
router.get("/", indexController.getIndex);
router.post("/new", messageController.createMessage);
```

## 🔄 Request Flow Example

Let's trace what happens when a user submits a new message:

```
1. USER submits form at /new
   ↓
2. ROUTE (newMessageRouter.js)
   POST /new → messageController.createMessage
   ↓
3. CONTROLLER (messageController.js)
   - Extract messageText and messageUser from req.body
   - Validate the input
   - Call model to save data
   ↓
4. MODEL (messageModel.js)
   - messageModel.createMessage(text, user)
   - Create new message object
   - Push to messages array
   - Return the new message
   ↓
5. CONTROLLER
   - Receive confirmation from model
   - Redirect to "/"
   ↓
6. ROUTE (indexRouter.js)
   GET / → indexController.getIndex
   ↓
7. CONTROLLER (indexController.js)
   - Call messageModel.getAllMessages()
   - Pass messages to view
   ↓
8. MODEL
   - Return all messages
   ↓
9. VIEW (index.ejs)
   - Render HTML with message data
   ↓
10. USER sees updated message list
```

## 📊 Data Flow Diagram

```
┌─────────────┐
│   Browser   │
│   (User)    │
└──────┬──────┘
       │
       │ HTTP Request
       ↓
┌─────────────────────────────────────┐
│           app.js                    │
│  (Middleware & Route Setup)         │
└──────┬──────────────────────────────┘
       │
       │ Route to appropriate handler
       ↓
┌─────────────────────────────────────┐
│         ROUTES                      │
│  Map URL → Controller Function      │
└──────┬──────────────────────────────┘
       │
       ↓
┌─────────────────────────────────────┐
│       CONTROLLERS                   │
│  Business Logic & Orchestration     │
│  ├─→ Call Model for data            │
│  └─→ Pass data to View              │
└──────┬────────────────────┬─────────┘
       │                    │
       │                    │
       ↓                    ↓
┌──────────────┐    ┌──────────────┐
│    MODEL     │    │     VIEW     │
│ Data & Logic │    │   Templates  │
│              │    │   (EJS)      │
└──────────────┘    └──────┬───────┘
                           │
                           │ Rendered HTML
                           ↓
                    ┌─────────────┐
                    │   Browser   │
                    └─────────────┘
```

## 🎯 Benefits of This Structure

### **Separation of Concerns**
- Each layer has ONE job
- Changes in one layer don't affect others
- Easy to understand where code belongs

### **Maintainability**
- Bug in data logic? Check the model
- Bug in display? Check the view
- Bug in request handling? Check the controller

### **Testability**
- Test models independently
- Test controllers with mock models
- Test routes with mock controllers

### **Scalability**
- Add new features without touching existing code
- Easy to add new routes, controllers, models
- Can swap out database later (just change model)

### **Team Collaboration**
- Different developers can work on different layers
- Clear ownership of code sections
- Less merge conflicts

## 🔧 How to Modify

### **Adding a New Feature: Delete Message**

**1. Model** (`messageModel.js`):
```javascript
exports.deleteMessage = (id) => {
    const index = parseInt(id);
    if (index >= 0 && index < messages.length) {
        messages.splice(index, 1);
        return true;
    }
    return false;
};
```

**2. Controller** (`indexController.js`):
```javascript
exports.deleteMessage = (req, res) => {
    const id = req.params.id;
    const success = messageModel.deleteMessage(id);
    res.redirect("/");
};
```

**3. Route** (`indexRouter.js`):
```javascript
indexRouter.post("/message/:id/delete", indexController.deleteMessage);
```

**4. View** (`index.ejs`):
```html
<form method="POST" action="/message/<%= index %>/delete">
    <button type="submit">Delete</button>
</form>
```

## 🚀 Running the Application

```bash
# Install dependencies
npm install express ejs

# Start the server
node app.js

# Visit in browser
http://localhost:3000/
```

## 📝 API Endpoints

| Method | URL | Controller | Action |
|--------|-----|------------|--------|
| GET | / | indexController.getIndex | Show all messages |
| GET | /message/:id | indexController.getMessageDetail | Show message detail |
| GET | /new | messageController.showNewMessageForm | Show form |
| POST | /new | messageController.createMessage | Create message |

## 🎓 Key Takeaways

1. **Models** manage data - they don't know about HTTP
2. **Views** display data - they don't know where it comes from
3. **Controllers** connect everything - they orchestrate
4. **Routes** are just a map - they delegate work
5. **Thin routes, thin views, smart controllers, focused models**