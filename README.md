# HNG12 Public API [Week 0]

## Description
This API returns:
- Your registered email address.
- The current datetime in ISO 8601 format.
- The GitHub URL of this project.

## API Endpoint
**GET** `<your-deployed-url>`

### Response:
```json
{
  "email": "myemail@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Korious/API.git"
}