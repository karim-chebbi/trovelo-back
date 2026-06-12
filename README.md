 🛴 Trovelo – Electric Scooter E-Commerce API

Trovelo is a **MERN stack backend API** for an electric scooter e-commerce platform.  
It provides authentication, role-based access control (admin/user), and full CRUD operations for managing scooters.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- dotenv
- express-validator
- nodemon

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/karim-chebbi/trovelo-back.git
cd trovelo
2. Install dependencies
npm install
3. Setup environment variables

Create a .env file in the root folder:

cp .env.example .env

Then update it with your own values:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
▶️ Running the server
Development mode (with nodemon)
npx nodemon server.js

OR (if nodemon installed globally):

nodemon server.js
📡 API Routes
🧪 Test Route
GET /api/scooters/test
🛴 Scooter Routes
Public Routes
GET    /api/scooters        -> Get all scooters
POST   /api/scooters        -> Add scooter
Admin Protected Routes

Requires isAuth + isAdmin

GET    /api/scooters/:id    -> Get scooter by ID
PUT    /api/scooters/:id    -> Update scooter by ID
DELETE /api/scooters/:id    -> Delete scooter by ID
🔐 Auth Routes
Register
POST /api/auth/register
Login
POST /api/auth/login
Get current user
GET /api/auth/current

🔒 Requires authentication token (JWT)

🧠 Authentication Flow
Users register via /register
Login returns a JWT token
Token must be sent in headers:
Authorization: Bearer YOUR_TOKEN
Admin routes require:
valid token (isAuth)
role = "admin" (isAdmin)
👮 Roles
Role	Permissions
User	View scooters, login, register
Admin	Full CRUD on scooters
📁 Project Structure
/routes
/controllers
/models
/middlewares
/validators
server.js
⚙️ Server Setup

In server.js:

app.use("/api/scooters", require("./routes/scooterRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
🛠 Features
🔐 JWT Authentication
👮 Role-based authorization (Admin/User)
🛴 Scooter CRUD system
✅ Input validation
🌍 RESTful API design
⚡ Scalable structure for e-commerce
📌 Future Improvements
Stripe payment integration 💳
Image upload (Cloudinary) 📸
Order system 🧾
Wishlist ❤️
Pagination & search filters 🔍
Frontend React dashboard 🖥️
👨‍💻 Author

Built with ⚡ by Karim Chebbi

📄 License

This project is licensed under the MIT License.
