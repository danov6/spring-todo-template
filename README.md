# Todo App Template

A full-stack todo application template built with Spring Boot backend, PostgreSQL database, and React frontend. Perfect for bootstrapping new projects or learning full-stack development.

## Tech Stack

- **Backend**: Java Spring Boot 3.2.0 with JPA/Hibernate
- **Database**: PostgreSQL 15
- **Frontend**: React 18 with Context API for state management
- **Containerization**: Docker & Docker Compose
- **Build Tools**: Maven (Backend), npm (Frontend)

## Features

- ✅ Complete CRUD operations for todos
- ✅ RESTful API with proper HTTP status codes
- ✅ Global state management with React Context API
- ✅ Form validation on both frontend and backend
- ✅ Responsive design with clean UI
- ✅ Docker containerization for easy deployment
- ✅ Proper error handling and loading states
- ✅ Database persistence with PostgreSQL

## Project Structure

```
todo-app/
├── backend/                 # Spring Boot API
│   ├── src/main/java/
│   │   └── com/todoapp/
│   │       ├── controller/  # REST controllers
│   │       ├── model/       # JPA entities
│   │       ├── repository/  # Data access layer
│   │       └── service/     # Business logic
│   ├── Dockerfile
│   └── pom.xml
├── frontend/                # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # Context API providers
│   │   └── services/        # API service layer
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml       # Multi-container setup
└── README.md
```

## Quick Start

### Using Docker (Recommended)

1. Clone this repository
2. Navigate to the project directory
3. Run the application:
   ```bash
   docker-compose up --build
   ```
4. Access the app at http://localhost:3000

### Manual Setup

**Prerequisites:**

- Java 17+
- Node.js 18+
- PostgreSQL 15+
- Maven 3.6+

**Backend Setup:**

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

**Frontend Setup:**

```bash
cd frontend
npm install
npm start
```

**Database Setup:**
Create a PostgreSQL database named `todoapp` with user `todouser` and password `todopass`.

## API Endpoints

| Method | Endpoint                    | Description         |
| ------ | --------------------------- | ------------------- |
| GET    | `/api/todos`                | Get all todos       |
| GET    | `/api/todos?completed=true` | Get completed todos |
| GET    | `/api/todos/{id}`           | Get todo by ID      |
| POST   | `/api/todos`                | Create new todo     |
| PUT    | `/api/todos/{id}`           | Update todo         |
| DELETE | `/api/todos/{id}`           | Delete todo         |

## Development

- **Backend**: http://localhost:8080
- **Frontend**: http://localhost:3000
- **Database**: localhost:5432

## Environment Variables

You can customize the application using these environment variables:

**Backend:**

- `SPRING_DATASOURCE_URL`: Database connection URL
- `SPRING_DATASOURCE_USERNAME`: Database username
- `SPRING_DATASOURCE_PASSWORD`: Database password

**Frontend:**

- `REACT_APP_API_URL`: Backend API URL (default: http://localhost:8080/api)

## Using This Template

This repository is designed as a template for creating new todo applications. You can:

1. **Use GitHub Template**: Click "Use this template" button on GitHub
2. **Fork**: Fork this repository and customize it
3. **Clone**: Clone and modify for your needs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
