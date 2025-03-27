# Dog-MariaDB-REST---SPA-Server

A simple web-based system to manage dog records (fetch, add, update, delete) using a REST API and a frontend UI.

## **Prerequisites**

- Node.js installed
- MariaDB installed and running

## **Installation & Setup**

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start MariaDB**  
   Ensure MariaDB is running and contains the required database. You can login with the given user and password.

4. **Start the REST API server**

   ```sh
   cd REST-Server
   node indexREST.js
   ```

   The API runs at `http://localhost:4000/api/dogs`

5. **Start the frontend server**
   ```sh
   cd spaServer
   node spaServer.js
   ```
   The frontend runs at `http://localhost:3000`

---

## **Project Structure**

📂 **REST Server/** → Backend (Express.js, handles API requests)  
📂 **SPA Server/** → UI (HTML, CSS, JS, fetches data from REST API)  
📂 **Database/** → Database schema for MariaDB

---

## **Endpoints Overview**

| Method | Endpoint            | Description                                |
| ------ | ------------------- | ------------------------------------------ |
| GET    | `/api/dogs`         | Get all dogs                               |
| GET    | `/api/dogs/:number` | Get a specific dog                         |
| POST   | `/api/dogs`         | Add a new dog                              |
| PUT    | `/api/dogs`         | Update an existing dog or create a new one |
| DELETE | `/api/dogs/:number` | Remove a dog                               |

---

## **Features**

- 📋 Fetch all dogs
- 🔍 Fetch a specific dog
- ➕ Add a new dog
- ✏️ Update dog details
- ❌ Delete a dog

---

### **How to Use?**

1. **Open the frontend** at `http://localhost:3000`
2. Use the buttons to navigate through different functionalities
3. Manage dog data via forms and tables

Enjoy managing your dog database! 🐕 🚀
