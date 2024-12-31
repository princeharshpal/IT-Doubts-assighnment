# Contact Management Application

## Project Description

This Contact Management Application is a full-stack web application that allows users to create, view, edit, and delete contact entries. It features a React-based frontend, an Express.js backend, and a MongoDB database for storing contact details. The application adheres to RESTful API principles and implements form validation for robust user input handling.

### Key Features

- **Create Entry:** Add a new contact with details like first name, last name, email, phone number, company name, and job title.
- **Edit Entry:** Update existing contact details.
- **View Entries:** Display all stored contacts in a tabular format.
- **Delete Entry:** Remove a contact from the database.
- **Validation:** Backend validation ensures data integrity and completeness.

### Major Technical Decisions

- **React Router:** Used for seamless navigation between pages without reloading.
- **Axios:** Simplified HTTP requests for API communication.
- **Express Validator:** Ensured robust backend validation.
- **Environment Variables:** Configured API base URLs using `VITE_REACT_BASE_URL`.
- **MongoDB:** Chosen for its schema flexibility and scalability.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- npm or yarn package manager

### Steps to Run the Project

#### 1. Clone the Repository

```bash
 git clone <repository-url>
 cd <repository-folder>
```

#### 2. Backend Setup

1. Navigate to the backend folder and install dependencies:

```bash
 cd backend
 npm install
```

2. Start MongoDB:

```bash
 mongod
```

3. Start the server:

```bash
 node index.js
```

The backend will be running on `http://localhost:3000`.

#### 3. Frontend Setup

1. Navigate to the frontend folder and install dependencies:

```bash
 cd frontend
 npm install
```

2. Create a `.env` file in the root of the `frontend` folder and configure the base URL:

```env
VITE_REACT_BASE_URL=http://localhost:3000
```

3. Start the React development server:

```bash
 npm run dev
```

The frontend will be available on `http://localhost:5173` (default Vite port).

---

## Database Schema

### `contactModel`

| Field     | Type   | Required | Description                                 |
| --------- | ------ | -------- | ------------------------------------------- |
| firstname | String | Yes      | First name of the contact. Minimum 3 chars. |
| lastname  | String | No       | Last name of the contact.                   |
| email     | String | Yes      | Unique email of the contact.                |
| phone     | Number | Yes      | Phone number with a minimum of 10 digits.   |
| company   | String | Yes      | Company name of the contact.                |
| jobtitle  | String | Yes      | Job title of the contact.                   |

---

## Application Workflow

### 1. Frontend

- **Create Entry Page:**
  - Form to input contact details.
  - Uses Axios to send `POST` requests to the backend.
- **Edit Entry Page:**
  - Pre-filled form for updating existing contact details.
  - Sends `PUT` requests to the backend.
- **Entries Page:**
  - Displays all contacts in a table.
  - Includes "Edit" and "Delete" buttons.

### 2. Backend

- **Routes:**
  - `GET /contacts`: Fetch all contacts.
  - `GET /contacts/:id`: Fetch a single contact by ID.
  - `POST /contacts`: Create a new contact with validation.
  - `PUT /contacts/:id`: Update a contact by ID.
  - `DELETE /contacts/:id`: Delete a contact by ID.
- **Validation:**
  - Ensures fields like `firstname`, `email`, and `phone` are properly formatted and required fields are not empty.

### 3. Database

- MongoDB stores all contact entries.
- Uses Mongoose for schema validation and data management.

---

## Notes

- Ensure MongoDB is running before starting the backend.
- Use a tool like Postman or Thunder Client for testing API endpoints.
- For deployment, configure the `VITE_REACT_BASE_URL` in the environment variables to match the backend's hosted URL.

---


