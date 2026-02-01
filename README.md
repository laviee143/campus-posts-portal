📘 Campus Posts Portal

A full-stack campus communication platform that allows students to share posts and administrators to manage content using role-based access control.

📌 Project Overview

Campus Posts Portal is a role-based web application built to help campus communities share announcements, updates, and discussions in a secure and organized way.

The system supports user authentication, post management, and an admin dashboard, fulfilling all core backend and frontend requirements.

🎯 Features (Based on Requirements)
👤 Authentication & Authorization

User registration

User login and logout

JWT authentication using HTTP-only cookies

Protected routes (unauthenticated users cannot access dashboards)

Role-based access control (Student / Admin)

📝 Posts Management

Create posts (authenticated users)

View all posts

Delete own posts

Admin can delete any post

🛡️ Admin Dashboard

View all posts

Delete posts as admin

Admin role enforcement

🎨 UI & UX

Built with Tailwind CSS

Clean gray, slate, and navy-blue theme

Responsive design

Clear dashboards for users and admins

🧰 Tech Stack
Frontend

Next.js (App Router)

Tailwind CSS

Fetch API with credentials

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

🗂️ Project Structure
campus-posts-portal/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── server.ts
│
├── frontend/
│   ├── app/
│   ├── components/
│   └── styles/
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/laviee143/campus-posts-portal.git
cd campus-posts-portal

2️⃣ Backend Setup
cd backend
npm install
npm run dev


Create a .env file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:3000

🔄 Application Flow

User registers an account

User logs in

User creates posts

Posts appear immediately on the posts page

Admin logs in

Admin manages and deletes posts from the admin dashboard

🧪 Testing (Manual)
Register
POST /api/auth/register

Login
POST /api/auth/login

Create Post
POST /api/posts

View Posts
GET /api/posts

Delete Post
DELETE /api/posts/:id

📸 Screenshots

🏠 Landing Page

<img width="1679" height="864" alt="image" src="https://github.com/user-attachments/assets/d5b89a30-b1c4-4f88-aba9-918ddca9b2c8" />

🔐 Register Page

<img width="1369" height="826" alt="image" src="https://github.com/user-attachments/assets/0dfb1b98-4bdf-4131-a26e-9bc38509b036" />

🔐 Login Page

<img width="1207" height="807" alt="image" src="https://github.com/user-attachments/assets/58a3557c-3f5b-44fc-9cea-10bd7db6c76e" />

🧑‍💻 User Dashboard

<img width="934" height="510" alt="image" src="https://github.com/user-attachments/assets/d1cf39d8-1716-43aa-ab39-b15e21c8a275" />

📝 Posts Page

<img width="1920" height="1032" alt="image" src="https://github.com/user-attachments/assets/03039461-2438-4054-aecd-7d3bdd80c09f" />

🛠️ Admin Dashboard
<img width="1013" height="666" alt="image" src="https://github.com/user-attachments/assets/cfdfcb50-fed9-4862-9ade-a32eae223698" />
<img width="1687" height="807" alt="image" src="https://github.com/user-attachments/assets/eccfb3bb-d78b-44fe-a71b-fbf130e8f9c0" />

Responsiveness

<img width="418" height="825" alt="image" src="https://github.com/user-attachments/assets/16543e11-5e16-4670-a00c-4358cf12cfc9" />

🚀 Future Improvements

Edit posts

Image uploads

Pagination

👤 Author

Jerusalem Girma

