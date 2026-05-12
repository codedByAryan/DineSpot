# 🍽️ Dinespot  
Built a full-stack restaurant discovery platform using the MERN stack with dynamic search and filtering capabilities.
– Implemented CRUD operations to manage 100+ restaurant records, enhancing data accessibility and user experience.
– Developed scalable REST APIs using Node.js and Express.js and integrated authentication for secure user and owner
access.

---

## 📌 Short Description  
Dinespot is a full-stack restaurant discovery and management platform built using the MERN stack. It allows users to explore restaurants, view menus, make bookings, and interact with a modern, responsive UI.

---

## 🚀 Live Demo  
🔗 https://dine-spot-six.vercel.app/

---

## 📚 Table of Contents  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Prerequisites](#-prerequisites)  
- [Installation & Setup](#-installation--setup)  
- [Usage](#-usage--how-to-run)  
- [Project Structure](#-project-structure)  
- [Environment Variables](#-environment-variables)  
- [Screenshots](#-screenshots)  
- [API Documentation](#-api-documentation)  
- [Contributing](#-contributing-guidelines)  
- [License](#-license)  
- [Author](#-author--contact-info)  

---

## ✨ Features  
- 🔍 Search and explore restaurants  
- 🧾 View menus and restaurant details  
- 📅 Table booking system  
- 👤 User authentication (Login/Register)  
- ⭐ Ratings and reviews  
- 📱 Fully responsive design  
- ⚡ Fast backend performance  
- 🔐 JWT-based authentication  

---

## 🛠️ Tech Stack  

### Frontend  
- React.js  
- Tailwind CSS  
- Axios  

### Backend  
- Node.js  
- Express.js  

### Database  
- MongoDB  

### Tools  
- Git & GitHub  
- Postman  
- Vercel / Render  

---

## 📋 Prerequisites  

- Node.js (>=16)  
- npm or yarn  
- MongoDB (local or Atlas)  
- Git  

---

## ⚙️ Installation & Setup  

### Clone the repository  
```bash
git clone https://github.com/codedByAryan/DineSpot.git
cd dinespot
```

### Install dependencies  

#### Frontend  
```bash
cd client
npm install
```

#### Backend  
```bash
cd ../server
npm install
```

---

## ▶️ Usage / How to Run  

### Start backend  
```bash
cd server
npm run dev
```

### Start frontend  
```bash
cd client
npm start
```

### Open in browser  
```
http://localhost:3000
```

---

## 📁 Project Structure  

```
dinespot/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

## 🔐 Environment Variables  

Create a `.env` file in the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
```

---

## 📸 Screenshots  

- Homepage  
- Restaurant Listing  
- Booking Page  
- Dashboard  

---

## 📡 API Documentation  

### Base URL  
```
http://localhost:5000/api
```

### Endpoints  

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | /restaurants | Get all restaurants |
| GET | /restaurants/:id | Get restaurant details |
| POST | /auth/register | Register user |
| POST | /auth/login | Login user |
| POST | /booking | Book table |

---

## 🤝 Contributing Guidelines  

1. Fork the repository  
2. Create a branch  
```bash
git checkout -b feature/your-feature-name
```
3. Commit changes  
```bash
git commit -m "Your message"
```
4. Push  
```bash
git push origin feature/your-feature-name
```
5. Create Pull Request  

---

---

## 👨‍💻 Author 

Aryan Chauhan 
- GitHub: https://github.com/codedByAryan  
- Email: your-email@example.com  

---

## ⭐ Support  

If you like this project, give it a ⭐ on GitHub!