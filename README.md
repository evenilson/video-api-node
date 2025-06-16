# 📼 Simple Video API

A basic CRUD API for managing videos, built with **Node.js**, **Fastify**, and **PostgreSQL** (using **Neon** as the database provider). Deployed on **Render**.

## ⚙️ Tech Stack

- **Node.js**
- **Fastify**
- **PostgreSQL** (via [Neon](https://neon.tech))
- **Render** for deployment

## 📁 Features

- Create, Read, Update and Delete video records
- Each video includes: `title`, `description`, and `duration`
- Lightweight and easy to deploy

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/simple-video-api.git
cd simple-video-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file with your Neon database URL:

```env
DATABASE_URL="your-neon-database-url"
PORT=3333
```

### 4. Start the server

```bash
npm run dev
```

> The API will be running at: `http://localhost:3333`

---

## 📬 API Endpoints

| Method | Route         | Description        |
|--------|---------------|--------------------|
| GET    | `/videos`     | List all videos    |
| POST   | `/videos`     | Create a new video |
| PUT    | `/videos/:id` | Update a video     |
| DELETE | `/videos/:id` | Delete a video     |

---

## ☁️ Deployment

This project is deployed on [Render](https://render.com/).

To deploy:

1. Push the project to GitHub  
2. Create a new Web Service on Render  
3. Add your environment variables (`DATABASE_URL`, etc.)  
4. Use `npm run dev` as the start command