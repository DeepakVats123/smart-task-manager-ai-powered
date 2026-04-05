# 🧠 Smart Task Manager — AI Powered

> A full-stack AI-powered task management app built with the MERN stack. Create, update, and delete tasks seamlessly, with an AI-generated summary of your tasks powered by Claude AI.

---

## 🚀 Features

- ✅ **Add Tasks** — Create new tasks from the frontend and save them directly to MongoDB
- ✏️ **Update Tasks** — Edit existing tasks and sync changes to the database instantly
- 🗑️ **Delete Tasks** — Remove tasks from the frontend with real-time database deletion
- 🤖 **AI Summary** — Generate an intelligent summary of all your tasks using AI capabilities
- 🔀 **Client-Side Routing** — Smooth navigation with `react-router-dom`
- ⚙️ **Full CRUD via Express.js** — RESTful API with complete Create, Read, Update, Delete operations
- 🗃️ **MongoDB Integration** — Persistent data storage with Mongoose ODM

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React.js           |
| Routing    | React Router DOM   |
| Backend    | Node.js, Express.js|
| Database   | MongoDB + Mongoose |
| AI         | Gemini api

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/smart-task-manager-ai-powered.git
cd smart-task-manager-ai-powered
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
PORT=3200
MONGO_URI=your_mongodb_connection_string
AI_API_KEY=your_ai_api_key
```

Start the backend server:

```bash
npm run dev
```

Backend runs at: `http://localhost:3200`

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| GET    | `/api/v1/tasks`     | Fetch all tasks      |
| POST   | `/api/v1/tasks`     | Create a new task    |
| PUT    | `/api/v1/tasks/:id` | Update a task by ID  |
| DELETE | `/api/v1/tasks/:id` | Delete a task by ID  |
| POST   | `/api/v1/summary`   | Get AI task summary  |

---

## 🧩 How It Works

1. User adds a task via the React frontend form
2. The request hits the Express.js REST API
3. The task is saved/updated/deleted in MongoDB
4. On request, the AI reads all tasks and returns a smart summary
5. React Router handles page navigation without full reload

---

## 📬 Contact

You will need your own credentials (MongoDB URI, AI API key) to start this project. Feel free to contact me if you have questions or want to collaborate? Reach out!

- 📞 Phone: [+91 8979405953](tel:+918979405953)
- 📧 Email: [deepakvats123123@gmail.com](mailto:deepakvats123123@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
