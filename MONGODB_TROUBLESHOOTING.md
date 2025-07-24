# MongoDB Connection Troubleshooting Guide

## Common MongoDB Atlas Connection Issues and Solutions

### 1. DNS Resolution Error: `querySrv ENOTFOUND`

**Error Message:**
```
MongoDB connection error: Error: querySrv ENOTFOUND _mongodb._tcp.cluster.mongodb.net
```

**Causes & Solutions:**

#### A. Incorrect Connection String
- ❌ **Wrong:** `mongodb+srv://user:pass@cluster.mongodb.net/db`
- ✅ **Correct:** `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/db?retryWrites=true&w=majority`

#### B. Steps to Get Correct Connection String:
1. Log into [MongoDB Atlas](https://cloud.mongodb.com/)
2. Navigate to your cluster
3. Click "Connect" button
4. Choose "Connect your application"
5. Select "Node.js" as driver
6. Copy the complete connection string
7. Replace `<password>` with your actual password
8. Replace `<database>` with your database name

#### C. Network Access Issues:
1. Go to MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Choose "Add Current IP Address" or "Allow Access from Anywhere" (0.0.0.0/0)
4. Save the changes and wait for it to activate

#### D. Authentication Issues:
1. Go to Database Access in MongoDB Atlas
2. Ensure your user has proper permissions
3. Check username and password are correct
4. Make sure password doesn't contain special characters that need URL encoding

### 2. Environment Variables

Make sure your `.env` file contains:
```env
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/database_name?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
```

### 3. URL Encoding for Special Characters

If your password contains special characters, encode them:
- `@` → `%40`
- `:` → `%3A`
- `/` → `%2F`
- `?` → `%3F`
- `#` → `%23`
- `[` → `%5B`
- `]` → `%5D`

### 4. Testing Connection

Run this command to test your connection:
```bash
npm start
```

Look for:
- ✅ `Connected to MongoDB successfully`
- ❌ `MongoDB connection error`

### 5. Common Connection String Examples

**Template:**
```
mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
```

**Example:**
```
mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/bookstore?retryWrites=true&w=majority
```

### 6. Firewall Issues

If you're behind a corporate firewall:
- MongoDB Atlas uses port 27017
- Ensure the port is not blocked
- Try using a different network (mobile hotspot) to test

### 7. Regional Issues

- Make sure your cluster region is accessible from your location
- Consider creating a cluster in a different region if needed

### 8. Free Tier Limitations

MongoDB Atlas free tier (M0) has some limitations:
- Limited to 512MB storage
- May have connection limits
- Consider upgrading if needed

---

## Quick Fix Checklist

1. ☐ Verify connection string format
2. ☐ Check username and password
3. ☐ Ensure IP address is whitelisted
4. ☐ Confirm database name is correct
5. ☐ Test with a simple connection script
6. ☐ Check MongoDB Atlas cluster status
7. ☐ Verify network connectivity

---

**Need Help?**
- MongoDB Atlas Documentation: https://docs.atlas.mongodb.com/
- MongoDB Connection String Documentation: https://docs.mongodb.com/manual/reference/connection-string/
