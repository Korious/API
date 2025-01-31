# HNG12 Public API [Week 0]

## Description
This API returns:
- Your registered email address.
- The current datetime in ISO 8601 format.
- The GitHub URL of this project.

## Setup Instructions

### Prerequisites:
- Install [Node.js](https://nodejs.org/)
- Install [Git](https://git-scm.com/)

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/Korious/API.git
   cd API
2. Install dependencies:
    ```sh
    npm install
3. Start the server:
    ```sh
    node server.js
4. Test the API locally:
    ```sh
    curl http://localhost:3000/
## 🚀 API Documentation
  ### API Endpoint
  **GET** https://api-bj1b.onrender.com

  ### Response:
    {
      "email": "myemail@gmail.com",
      "current_datetime": "2025-01-30T09:30:00Z",
      "github_url": "https://github.com/Korious/API.git"
    }
## Example Usage
  ### cURL:
      curl https://api-bj1b.onrender.com/

## More Resources
  [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
