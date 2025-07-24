# Bookstore Project Structure

## Overview
This is a complete RESTful API for a bookstore application built with modern web technologies.

## 🏗️ Architecture

```
bookstore/
├── 📁 controllers/          # Business logic layer
│   ├── book.controller.js   # Book management operations
│   ├── user.controller.js   # User authentication & management  
│   └── order.controller.js  # Order processing logic
├── 📁 models/              # Data models (MongoDB schemas)
│   ├── Book.js             # Book schema definition
│   ├── User.js             # User schema definition
│   └── Order.js            # Order schema definition
├── 📁 routes/              # API route definitions
│   ├── book.routing.js     # Book API endpoints
│   ├── user.routing.js     # User API endpoints
│   └── order.routing.js    # Order API endpoints
├── 📄 app.js              # Main application entry point
├── 📄 package.json        # Dependencies and scripts
├── 📄 .env.example        # Environment variables template
├── 📄 .gitignore          # Git ignore rules
└── 📁 docs/               # Documentation files
    ├── README.md          # Project overview
    ├── API_DOCS.md        # Complete API documentation
    ├── API_QUICK_REFERENCE.md  # Quick reference guide
    └── Bookstore_API.postman_collection.json  # Testing collection
```

## 🚀 Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Authentication & Security
- **bcrypt** - Password hashing
- **JWT** - Token-based authentication
- **dotenv** - Environment variable management

### Development Tools
- **nodemon** - Development server with auto-restart
- **Postman** - API testing (collection included)

## 🔄 API Flow

### 1. User Registration/Login Flow
```
Client Request → User Routes → User Controller → User Model → MongoDB
                     ↓
JWT Token ← Response ← Validation ← Password Hashing
```

### 2. Book Management Flow
```
Client Request → Book Routes → Book Controller → Book Model → MongoDB
                     ↓
JSON Response ← Data Processing ← CRUD Operations
```

### 3. Order Processing Flow
```
Client Request → Order Routes → Order Controller → Order Model + Book/User Models → MongoDB
                     ↓
Order Confirmation ← Transaction Processing ← Stock Validation
```

## 📊 Database Schema

### Books Collection
- Stores book information (title, author, price, stock, etc.)
- Supports inventory management
- Includes categorization and images

### Users Collection  
- User authentication data
- Encrypted passwords with bcrypt
- Unique username and email constraints

### Orders Collection
- Links users to books they've ordered
- Tracks quantities and order relationships
- Uses MongoDB ObjectId references

## 🛡️ Security Features

1. **Password Security**
   - Bcrypt hashing with salt rounds
   - Minimum password length requirements

2. **Data Validation**
   - Input sanitization
   - Schema validation with Mongoose
   - Error handling for invalid data

3. **Environment Security**
   - Sensitive data in environment variables
   - .env file excluded from version control

## 🧪 Testing Strategy

### Manual Testing
- Postman collection with pre-configured requests
- Step-by-step testing workflow
- Environment variables for different testing scenarios

### API Testing Workflow
1. **Setup Phase**: Register users, create books
2. **Integration Phase**: Create orders linking users and books
3. **Validation Phase**: Test error cases and edge conditions

## 📈 Scalability Considerations

### Database
- MongoDB ObjectId references for efficient lookups
- Indexing on frequently queried fields (username, email)
- Transaction support for order processing

### API Design
- RESTful principles for predictable endpoints
- Consistent error response format
- Modular controller structure for maintainability

### Performance
- Mongoose connection pooling
- Efficient query patterns
- Error handling to prevent crashes

## 🔧 Development Workflow

### Local Development
1. Clone repository
2. Install dependencies with `npm install`
3. Configure environment variables
4. Start development server with `npm run dev`

### Production Deployment
- Environment-specific configuration
- Database connection string management
- Process management considerations

## 📚 Learning Outcomes

This project demonstrates:
- **RESTful API Design** - Industry-standard API patterns
- **Database Modeling** - NoSQL schema design with relationships
- **Authentication** - Secure user management
- **Error Handling** - Robust error management
- **Documentation** - Professional API documentation
- **Testing** - API testing strategies and tools

## 🎯 Future Enhancements

Potential improvements:
- Pagination for large datasets
- Advanced search and filtering
- File upload for book images
- Email notifications for orders
- Rate limiting and API throttling
- Automated testing with Jest/Mocha
- Docker containerization
- CI/CD pipeline setup

---

**Note**: This project serves as a comprehensive example of modern Node.js API development practices.
