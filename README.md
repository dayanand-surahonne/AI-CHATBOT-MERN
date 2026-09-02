<div align="center">

# 🤖 AI Chatbot

### Full-Stack MERN AI Assistant Powered by Google Gemini

A modern conversational AI application built with **React, Node.js, Express.js, MongoDB Atlas, and Google Gemini API**.

<br/>

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-4-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=black)

<br/>

**MERN Stack • REST API • MongoDB Atlas • Google Gemini • AI Conversation History**

</div>

---

## 📸 1. Application Screenshot

<div align="center">

![AI Chatbot](AI-Chatbot.png)

</div>

> The screenshot above shows the AI Chatbot interface with an AI-generated response.

---

## ✨ 2. Project Overview

**AI Chatbot** is a full-stack conversational AI application developed using the **MERN stack** and powered by **Google Gemini**.

The application provides a modern chat interface where users can send messages to an AI assistant and receive intelligent responses.

The backend handles API communication, request validation, conversation history, database storage, rate limiting, error handling, and AI provider integration.

The project demonstrates how a complete AI-powered web application can be designed and connected from the frontend to the backend, database, and AI service.

---

## 🚀 3. Features

### 🤖 AI-Powered Conversations

- Google Gemini integration
- Natural language conversations
- Context-aware responses
- Configurable AI system prompt

### 💬 Modern Chat Interface

- React-based user interface
- User and assistant message bubbles
- Message timestamps
- Loading states
- Error handling
- Responsive layout

### 🧠 Conversation History

- Stores conversations in MongoDB Atlas
- Retrieves previous messages
- Sends previous conversation context to the AI
- Maintains conversation continuity
- Session-based conversation storage

### 🛡️ Backend Features

- Express REST API
- Request validation
- API rate limiting
- Centralized error handling
- AI API timeout handling
- Environment-based configuration
- HTTP-only session cookie

### 🔄 AI Provider Architecture

The backend is structured to support multiple AI providers:

- Google Gemini
- OpenAI
- Groq

Google Gemini is configured as the primary AI provider.

---

## 🛠️ 4. Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18 | User Interface |
| Vite 5 | Frontend Build Tool |
| JavaScript | Application Logic |
| CSS | UI Styling |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Server Runtime |
| Express.js | REST API |
| JavaScript ES Modules | Backend Development |

### Database

| Technology | Purpose |
|---|---|
| MongoDB | Database |
| MongoDB Atlas | Cloud Database |

### AI

| Technology | Purpose |
|---|---|
| Google Gemini API | Primary AI Provider |
| OpenAI API | AI Provider |
| Groq API | AI Provider |

### Development Tools

| Tool | Purpose |
|---|---|
| Git | Version Control |
| GitHub | Repository Hosting |
| VS Code | Development |
| npm | Package Management |

### Deployment

| Platform | Purpose |
|---|---|
| Render | Full-Stack Deployment |
| MongoDB Atlas | Cloud Database |
| GitHub | Source Code Repository |

---

## 🏗️ 5. System Architecture

```text
                         ┌─────────────────────┐
                         │        USER         │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    React + Vite     │
                         │    Frontend UI      │
                         └──────────┬──────────┘
                                    │
                              HTTP / REST
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │  Node.js + Express  │
                         │     Backend API     │
                         └──────────┬──────────┘
                                    │
                   ┌────────────────┼────────────────┐
                   │                │                │
                   ▼                ▼                ▼
          ┌────────────────┐ ┌──────────────┐ ┌──────────────┐
          │ MongoDB Atlas  │ │Google Gemini │ │ OpenAI/Groq  │
          │ Chat History   │ │     API      │ │   Services   │
          └────────────────┘ └──────────────┘ └──────────────┘
```

---

## 🔄 6. How It Works

```text
User enters message
        ↓
React Chat Interface
        ↓
POST /chat
        ↓
Express Backend
        ↓
Validate Request
        ↓
Retrieve Conversation History
        ↓
Send Context + Message to AI
        ↓
AI Generates Response
        ↓
Save Conversation to MongoDB
        ↓
Return AI Response
        ↓
Display Response in React
```

---

## 📁 7. Project Structure

```text
AI-CHATBOT-MERN/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   └── MessageInput.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── config/
│   ├── db.js
│   └── env.js
│
├── controllers/
│   └── chatController.js
│
├── middleware/
│   ├── errorHandler.js
│   ├── rateLimiter.js
│   └── session.js
│
├── models/
│   └── Conversation.js
│
├── routes/
│   └── chatRoutes.js
│
├── services/
│   ├── aiService.js
│   ├── geminiService.js
│   ├── groqService.js
│   └── openaiService.js
│
├── validators/
│   └── chatValidator.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## ⚙️ 8. Installation

### 1. Clone the repository

```bash
git clone https://github.com/dayanand-surahonne/AI-CHATBOT-MERN.git
```

### 2. Navigate to the project

```bash
cd AI-CHATBOT-MERN
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔑 9. Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
OPENAI_API_KEY=your_openai_api_key
GROQ_API_KEY=your_groq_api_key
```

Only configure the AI providers you actually use.

### 🔐 Important

Never commit your `.env` file or API keys to GitHub.

Your `.gitignore` should contain:

```gitignore
node_modules/
.env
client/node_modules/
client/dist/
```

---

## ▶️ 10. Running the Application

Start the application:

```bash
npm start
```

Open:

```text
http://localhost:3000
```

The application connects to MongoDB Atlas and serves the React frontend through the Express server.

---

## 🏗️ 11. Frontend Build

Build the React frontend for production:

```bash
npm run build:client
```

The production frontend is generated inside:

```text
client/dist/
```

---

## 📡 12. API Endpoints

### Send Message

```http
POST /chat
Content-Type: application/json
```

Request:

```json
{
  "message": "Hello"
}
```

Example response:

```json
{
  "reply": "Hello! How can I help you today?"
}
```

### Conversation History

```http
GET /chat/history
```

Returns the stored conversation history for the current session.

### Health Check

```http
GET /health
```

Example response:

```json
{
  "status": "ok"
}
```

---

## 🤖 13. Gemini Integration

Google Gemini is used as the primary AI provider.

The Gemini integration is implemented in:

```text
services/geminiService.js
```

The API key is loaded through:

```text
GEMINI_API_KEY
```

### Gemini Request Flow

```text
React Frontend
      ↓
POST /chat
      ↓
Express Controller
      ↓
AI Service
      ↓
Gemini Service
      ↓
Google Gemini API
      ↓
AI Response
      ↓
MongoDB
      ↓
React Interface
```

---

## 🔄 14. AI Provider Architecture

The project uses separate service files for AI providers:

```text
services/
│
├── aiService.js
├── geminiService.js
├── openaiService.js
└── groqService.js
```

Google Gemini is configured as the primary AI provider.

The architecture also supports OpenAI and Groq services.

```text
                ┌─────────────────┐
                │    AI Service   │
                └────────┬────────┘
                         │
                         ▼
                ┌─────────────────┐
                │ Google Gemini   │
                │    Primary      │
                └────────┬────────┘
                         │
                  If unavailable
                         │
                         ▼
                ┌─────────────────┐
                │ OpenAI / Groq   │
                │    Services     │
                └─────────────────┘
```

---

## 🗄️ 15. MongoDB Atlas

MongoDB Atlas is used as the cloud database for storing conversation data.

The conversation model is implemented in:

```text
models/Conversation.js
```

Example database structure:

```text
MongoDB Atlas
│
└── chatbot
    │
    └── conversations
        │
        ├── User Messages
        └── AI Responses
```

Conversation history can be retrieved through:

```http
GET /chat/history
```

The application uses a session ID stored in an HTTP-only cookie to associate a browser session with its conversation.

---

## 🚀 16. Render Deployment

The application is configured for deployment on **Render**.

### 🌐 Live Application

```text
https://ai-chatbot-mern-w1ao.onrender.com
```

### ❤️ Health Check

```text
https://ai-chatbot-mern-w1ao.onrender.com/health
```

### 📦 Render Configuration

| Setting | Value |
|---|---|
| Service Type | Web Service |
| Repository | `dayanand-surahonne/AI-CHATBOT-MERN` |
| Branch | `master` |
| Region | Singapore |
| Plan | Free |
| Build Command | `npm install && npm run build --prefix client` |
| Start Command | `npm start` |

### 🔑 Render Environment Variables

Add the following variables under **Render → Environment → Environment Variables**:

```text
MONGODB_URI
GEMINI_API_KEY
OPENAI_API_KEY
GROQ_API_KEY
```

Enter the **actual value only**.

Correct:

```text
Key: MONGODB_URI
Value: mongodb+srv://your-connection-string
```

Incorrect:

```text
Key: MONGODB_URI
Value: MONGODB_URI=mongodb+srv://your-connection-string
```

Do the same for the AI API keys.

### 🗄️ MongoDB Atlas

Make sure your MongoDB Atlas cluster allows connections from your deployed Render service.

For production, use appropriate MongoDB Atlas network access and security settings rather than exposing credentials publicly.

### 🔄 Deployment Flow

```text
GitHub Repository
       ↓
Render
       ↓
Install Dependencies
       ↓
Build React Frontend
       ↓
Start Express Server
       ↓
Connect MongoDB Atlas
       ↓
Application Live
```

### ⚠️ Render Server Requirement

The Express server must listen on the port supplied by Render:

```js
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🔐 17. Security & Reliability

The application includes several security and reliability features:

- 🔑 Environment variables for sensitive credentials
- 🚫 `.env` excluded from Git
- 🛡️ Request validation
- 🚦 API rate limiting
- ❌ Centralized error handling
- ⏱️ AI API timeout handling
- 🌐 MongoDB Atlas network access controls
- 🔒 Protected API credentials
- 🍪 HTTP-only session cookies
- 📦 Production frontend build

### Security Recommendation

Never upload the following to GitHub:

```text
.env
API Keys
MongoDB passwords
Secret tokens
Private credentials
```

If a secret is accidentally exposed, revoke or rotate it immediately.

---

## 📊 18. Project Highlights

| Area | Implementation |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | MongoDB Atlas |
| Primary AI | Google Gemini |
| AI Services | Gemini + OpenAI + Groq |
| API Style | REST |
| Context | Conversation History |
| Sessions | HTTP-only Cookie |
| Validation | Express Middleware |
| Security | Environment Variables + Rate Limiting |
| Storage | MongoDB |
| Build | Vite Production Build |
| Deployment | Render |
| Version Control | Git + GitHub |

---

## 🔮 19. Future Improvements

- [ ] 🧠 Long-term user memory
- [ ] 👤 User authentication
- [ ] 💬 Multiple chat sessions
- [ ] 📝 Conversation titles
- [ ] 🗑️ Delete conversations
- [ ] 🔍 Search chat history
- [ ] ⚡ Streaming AI responses
- [ ] 📎 File uploads
- [ ] 🎤 Voice input
- [ ] 🔊 AI voice output
- [ ] 🌙 Dark / Light theme
- [ ] 📱 Improved mobile experience
- [ ] 📊 Usage analytics

---

## 🎓 20. Learning Outcomes

This project demonstrates practical experience with:

- Full-stack JavaScript development
- MERN stack development
- React component architecture
- Vite frontend development
- Node.js backend development
- Express REST API development
- MongoDB and MongoDB Atlas
- Google Gemini API integration
- AI provider architecture
- Conversation context management
- Request validation
- API rate limiting
- Error handling
- Environment variable management
- Git and GitHub
- Render deployment
- Production frontend builds
- Full-stack application architecture

---

## 👨‍💻 21. Author

<div align="center">

### Dayananda Surahonne

**MCA — AI/ML Specialization**

Full-Stack Developer • AI/ML Enthusiast

[![GitHub](https://img.shields.io/badge/GitHub-dayanand--surahonne-181717?style=for-the-badge&logo=github)](https://github.com/dayanand-surahonne)

[![AI Chatbot](https://img.shields.io/badge/AI--CHATBOT--MERN-181717?style=for-the-badge&logo=github)](https://github.com/dayanand-surahonne/AI-CHATBOT-MERN)

</div>

---

## ⭐ 22. Support

<div align="center">

If you found this project useful, please consider giving it a ⭐ on GitHub.

### 🤖 AI Chatbot

**React • Node.js • Express.js • MongoDB Atlas • Google Gemini • Render**

Built with ❤️ for learning, experimentation, and AI application development.

### 🚀 Building intelligent applications for a smarter tomorrow.

</div>
