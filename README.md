# 📬 Mini Message Board

#### A modern message board application built with Node.js, Express, PostgreSQL, and EJS following the MVC architecture pattern.

![Mini Message Board Preview](./Screenshot.png)

## 🚀 [Live Demo](https://mini-message-board-production-8e5d.up.railway.app/)

## ✨ Features

- 📝 Create and view messages with persistent PostgreSQL storage
- 👤 Display message author and timestamp
- 🔍 View detailed information for each message
- 🎨 Responsive CSS Grid card layout with gradient theme
- 🏗️ Full MVC architecture with connection pooling
- 🔒 Parameterized queries for SQL injection protection

## 🛠️ Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database with pg driver
- **EJS** - Templating engine
- **CSS3** - Modern grid layout with animations

## 📁 Project Structure

```
├── app.js                          # Application entry point
├── .env                            # Environment variables (not in repo)
└── src/
    ├── models/
    │   ├── messageModel.js         # Data access layer
    │   └── db/
    │       ├── pool.js             # Connection pool config
    │       ├── queries.js          # SQL queries
    │       └── populatedb.js       # Database seeding
    ├── controllers/
    │   ├── indexController.js      # Home & detail logic
    │   └── messageController.js    # Form handling
    ├── routes/
    │   ├── indexRouter.js          # URL mappings
    │   └── newMessageRouter.js     # Form routes
    ├── views/
    │   ├── index.ejs               # Grid message list
    │   ├── form.ejs                # New message form
    │   ├── message.ejs             # Message details
    │   └── error.ejs               # Error page
    └── styles/
        └── styles.css              # Responsive styles
```

## 🚦 Quick Start

### Prerequisites
- Node.js (v18+)
- PostgreSQL database (local or Railway)

### Installation

```bash
# Clone repository
git clone https://github.com/anwangari/Mini-Message-Board.git
cd Mini-Message-Board

# Install dependencies
npm install

# Create .env file
cp .env
# Edit .env with your database credentials

# Seed database
npm run db:populate

# Start server
npm start
```

Visit `http://localhost:3000`

## 🗄️ Database Setup

### Railway PostgreSQL

1. Create PostgreSQL service in Railway
2. Copy `DATABASE_URL` from Variables tab
3. Add to `.env`:
   ```bash
   DATABASE_URL=postgresql://postgres:password@host:port/railway
   NODE_ENV=production
   ```
4. Run seeding script:
   ```bash
   npm run db:populate
   ```

### Schema

```sql
CREATE TABLE messages (
  message_id SERIAL PRIMARY KEY,
  "user" TEXT NOT NULL,
  text TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

## 📜 Available Scripts

```bash
npm start          # Start the application
npm run db:populate # Seed database with initial data
```

## 🏗️ MVC Architecture

- **Models** - Database operations and business logic (`messageModel.js`)
- **Views** - EJS templates for rendering UI
- **Controllers** - Request handling and response coordination
- **Routes** - URL mapping to controller functions

## 🎨 UI Features

- Responsive CSS Grid (3 columns → 1 on mobile)
- Purple gradient theme
- Card-based message layout
- Smooth hover animations
- SVG icons for visual clarity
- Mobile-first responsive design

## 📄 License

MIT License - see [LICENSE](LICENSE)

## 👤 Author

**Your Name**
- GitHub: [@anwangari](https://github.com/anwangari)

## 🙏 Acknowledgments

Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

---

⭐ Star this repo if you found it helpful!