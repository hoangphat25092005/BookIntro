# Bookstore API Quick Reference

## Base URL: `http://localhost:3000`

## 📚 Books Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/books/create` | Create a new book |
| GET | `/books/all` | Get all books |
| GET | `/books/:bookId` | Get book by ID |
| PUT | `/books/:bookId` | Update book by ID |
| DELETE | `/books/:bookId` | Delete book by ID |

## 👤 Users Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users/register` | Register new user |
| POST | `/users/login` | User login |

## 🛒 Orders Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/orders/create` | Create new order |
| GET | `/orders/all` | Get all orders |
| GET | `/orders/:orderId` | Get order by ID |

## 🧪 Testing Examples

### Create Book
```bash
POST /books/create
Content-Type: application/json

{
  "title": "Sample Book",
  "author": "John Author", 
  "price": 19.99,
  "stock": 100,
  "description": "Book description",
  "category": "Fiction",
  "image": "https://example.com/cover.jpg"
}
```

### Register User
```bash
POST /users/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Order
```bash
POST /orders/create
Content-Type: application/json

{
  "bookId": "BOOK_OBJECT_ID",
  "userId": "USER_OBJECT_ID", 
  "quantity": 2
}
```

## 📋 Response Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Server Error

## 🔑 Required Environment Variables

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_secret_key
```
