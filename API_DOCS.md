# Bookstore API Documentation

A RESTful API for managing a bookstore application with books, users, and orders.

## Base URL
```
http://localhost:3000
```

## Authentication
Currently, this API does not require authentication for most endpoints. User registration and login endpoints are available for future authentication implementation.

---

## 📚 Books API

### Create a New Book
**POST** `/books/create`

Creates a new book in the bookstore inventory.

**Request Body:**
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 15.99,
  "stock": 50,
  "description": "A classic American novel",
  "category": "Fiction",
  "image": "https://example.com/book-cover.jpg"
}
```

**Response:**
- **Status:** `201 Created`
```json
{
  "message": "Book created successfully",
  "book": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 15.99,
    "stock": 50,
    "description": "A classic American novel",
    "category": "Fiction",
    "image": "https://example.com/book-cover.jpg",
    "__v": 0
  }
}
```

**Error Responses:**
- **Status:** `500 Internal Server Error`
```json
{
  "message": "Internal server error"
}
```

---

### Get All Books
**GET** `/books/all`

Retrieves all books in the bookstore inventory.

**Response:**
- **Status:** `200 OK`
```json
[
  {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 15.99,
    "stock": 50,
    "description": "A classic American novel",
    "category": "Fiction",
    "image": "https://example.com/book-cover.jpg",
    "__v": 0
  }
]
```

**Error Responses:**
- **Status:** `404 Not Found`
```json
{
  "message": "No books found"
}
```

---

### Get Book by ID
**GET** `/books/:bookId`

Retrieves a specific book by its ID.

**Parameters:**
- `bookId` (string, required): MongoDB ObjectId of the book

**Response:**
- **Status:** `200 OK`
```json
{
  "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 15.99,
  "stock": 50,
  "description": "A classic American novel",
  "category": "Fiction",
  "image": "https://example.com/book-cover.jpg",
  "__v": 0
}
```

**Error Responses:**
- **Status:** `404 Not Found`
```json
{
  "message": "Book not found"
}
```

---

### Update Book by ID
**PUT** `/books/:bookId`

Updates a specific book by its ID.

**Parameters:**
- `bookId` (string, required): MongoDB ObjectId of the book

**Request Body:**
```json
{
  "title": "The Great Gatsby - Updated Edition",
  "author": "F. Scott Fitzgerald",
  "price": 18.99,
  "stock": 30,
  "description": "A classic American novel - Updated edition",
  "category": "Fiction",
  "image": "https://example.com/new-book-cover.jpg"
}
```

**Response:**
- **Status:** `200 OK`
```json
{
  "message": "Book updated successfully",
  "book": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "title": "The Great Gatsby - Updated Edition",
    "author": "F. Scott Fitzgerald",
    "price": 18.99,
    "stock": 30,
    "description": "A classic American novel - Updated edition",
    "category": "Fiction",
    "image": "https://example.com/new-book-cover.jpg",
    "__v": 0
  }
}
```

**Error Responses:**
- **Status:** `404 Not Found`
```json
{
  "message": "Book not found"
}
```

---

### Delete Book by ID
**DELETE** `/books/:bookId`

Deletes a specific book by its ID.

**Parameters:**
- `bookId` (string, required): MongoDB ObjectId of the book

**Response:**
- **Status:** `200 OK`
```json
{
  "message": "Book deleted successfully"
}
```

**Error Responses:**
- **Status:** `404 Not Found`
```json
{
  "message": "Book not found"
}
```

---

## 👤 Users API

### Register User
**POST** `/users/register`

Registers a new user account.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Validation Rules:**
- `username`: Required, must be unique
- `email`: Required, must be valid email format, must be unique
- `password`: Required, 8-128 characters

**Response:**
- **Status:** `201 Created`
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b4",
    "username": "johndoe",
    "email": "john@example.com",
    "__v": 0
  }
}
```

**Error Responses:**
- **Status:** `400 Bad Request`
```json
{
  "message": "All fields are required"
}
```
```json
{
  "message": "Password must be between 8 and 128 characters long"
}
```
```json
{
  "message": "Username already exists"
}
```

---

### Login User
**POST** `/users/login`

Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "username": "johndoe",
  "password": "securepassword123"
}
```

**Response:**
- **Status:** `200 OK`
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b4",
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

**Error Responses:**
- **Status:** `400 Bad Request`
```json
{
  "message": "Username and password are required"
}
```
- **Status:** `401 Unauthorized`
```json
{
  "message": "Invalid credentials"
}
```

---

## 🛒 Orders API

### Create Order
**POST** `/orders/create`

Creates a new order for a book.

**Request Body:**
```json
{
  "bookId": "60f7b3b3b3b3b3b3b3b3b3b3",
  "userId": "60f7b3b3b3b3b3b3b3b3b3b4",
  "quantity": 2
}
```

**Response:**
- **Status:** `201 Created`
```json
{
  "message": "Order created successfully",
  "order": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b5",
    "book": "60f7b3b3b3b3b3b3b3b3b3b3",
    "user": "60f7b3b3b3b3b3b3b3b3b3b4",
    "quantity": 2,
    "__v": 0
  }
}
```

**Error Responses:**
- **Status:** `404 Not Found`
```json
{
  "message": "Book or user not found"
}
```

---

### Get All Orders
**GET** `/orders/all`

Retrieves all orders in the system.

**Response:**
- **Status:** `200 OK`
```json
[
  {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b5",
    "book": {
      "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "price": 15.99
    },
    "user": {
      "_id": "60f7b3b3b3b3b3b3b3b3b3b4",
      "username": "johndoe",
      "email": "john@example.com"
    },
    "quantity": 2,
    "__v": 0
  }
]
```

---

### Get Order by ID
**GET** `/orders/:orderId`

Retrieves a specific order by its ID.

**Parameters:**
- `orderId` (string, required): MongoDB ObjectId of the order

**Response:**
- **Status:** `200 OK`
```json
{
  "_id": "60f7b3b3b3b3b3b3b3b3b3b5",
  "book": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 15.99
  },
  "user": {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b4",
    "username": "johndoe",
    "email": "john@example.com"
  },
  "quantity": 2,
  "__v": 0
}
```

---

## 🔧 Data Models

### Book Model
```javascript
{
  title: String,        // Book title
  author: String,       // Book author
  price: Number,        // Book price
  stock: Number,        // Available quantity
  description: String,  // Book description
  category: String,     // Book category
  image: String        // Book cover image URL
}
```

### User Model
```javascript
{
  username: String,     // Unique username (required)
  email: String,        // Unique email (required)
  password: String      // Hashed password (required, 8-128 chars)
}
```

### Order Model
```javascript
{
  book: ObjectId,       // Reference to Book model
  user: ObjectId,       // Reference to User model
  quantity: Number      // Quantity ordered
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/bookstore
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the server: `npm start`

### Testing the API
Use tools like:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Any HTTP client

### Example curl Commands

**Create a book:**
```bash
curl -X POST http://localhost:3000/books/create \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sample Book",
    "author": "John Author",
    "price": 19.99,
    "stock": 100,
    "description": "A sample book description",
    "category": "Technology",
    "image": "https://example.com/cover.jpg"
  }'
```

**Get all books:**
```bash
curl http://localhost:3000/books/all
```

**Register a user:**
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

---

## 📝 Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

All error responses follow this format:
```json
{
  "message": "Error description"
}
```

---

## 🔐 Security Notes

- Passwords are hashed using bcrypt
- JWT tokens are used for authentication
- Input validation is implemented
- Environment variables are used for sensitive data

---

## 📞 Support

For questions or issues, please refer to the project repository or contact the development team.
