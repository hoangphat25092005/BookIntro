# Bookstore API

A RESTful API for managing a bookstore application built with Node.js, Express, and MongoDB.

## Features

- **Book Management**: Create, read, update, and delete books
- **User Management**: User registration and authentication
- **Order Management**: Create and manage book orders
- **Data Validation**: Comprehensive input validation and error handling
- **MongoDB Integration**: Mongoose ODM for database operations

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcrypt for password hashing
- **Environment**: dotenv for configuration

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bookstore
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_jwt_secret_key
```

4. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Documentation

### 📖 Complete Documentation
- **[API_DOCS.md](./API_DOCS.md)** - Comprehensive API documentation with examples
- **[API_QUICK_REFERENCE.md](./API_QUICK_REFERENCE.md)** - Quick reference guide

### 🧪 Testing Tools
- **[Bookstore_API.postman_collection.json](./Bookstore_API.postman_collection.json)** - Postman collection for easy testing

## API Endpoints Overview

### Books
- `POST /books/create` - Create a new book
- `GET /books/all` - Get all books
- `GET /books/:bookId` - Get book by ID
- `PUT /books/:bookId` - Update book
- `DELETE /books/:bookId` - Delete book

### Users
- `POST /users/register` - Register new user
- `POST /users/login` - User login

### Orders
- `POST /orders/create` - Create new order
- `GET /orders/all` - Get all orders
- `GET /orders/:orderId` - Get order by ID

## Project Structure

```
bookstore/
├── controllers/
│   ├── book.controller.js      # Book CRUD operations
│   ├── user.controller.js      # User registration/login
│   └── order.controller.js     # Order management
├── models/
│   ├── Book.js                 # Book schema
│   ├── User.js                 # User schema
│   └── Order.js                # Order schema
├── routes/
│   ├── book.routing.js         # Book API routes
│   ├── user.routing.js         # User API routes
│   └── order.routing.js        # Order API routes
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── app.js                      # Main application entry point
├── package.json                # Project dependencies
├── API_DOCS.md                 # Complete API documentation
├── API_QUICK_REFERENCE.md      # Quick reference guide
└── Bookstore_API.postman_collection.json  # Postman collection
```

## Data Models

### Book
```javascript
{
  title: String,        // Book title (required)
  author: String,       // Book author (required)
  price: Number,        // Book price (required)
  stock: Number,        // Available quantity (required)
  description: String,  // Book description
  category: String,     // Book category
  image: String        // Book cover image URL
}
```

### User
```javascript
{
  username: String,     // Unique username (required)
  email: String,        // Unique email (required)
  password: String      // Hashed password (required, 8-128 chars)
}
```

### Order
```javascript
{
  book: ObjectId,       // Reference to Book model (required)
  user: ObjectId,       // Reference to User model (required)
  quantity: Number      // Quantity ordered (required)
}
```

## Testing

### Using Postman
1. Import the `Bookstore_API.postman_collection.json` file into Postman
2. Set the base URL to `http://localhost:3000`
3. Run the requests in the following order:
   - Register a user
   - Create a book
   - Create an order

### Using curl

**Create a book:**
```bash
curl -X POST http://localhost:3000/books/create \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sample Book",
    "author": "John Author",
    "price": 19.99,
    "stock": 100,
    "description": "A sample book",
    "category": "Technology"
  }'
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

## Error Handling

The API includes comprehensive error handling with standard HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Input validation and sanitization
- Environment variables for sensitive data

## Development

### Available Scripts
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes.

## Support

For questions or issues, please refer to the API documentation or create an issue in the repository.
