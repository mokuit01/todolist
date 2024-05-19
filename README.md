# todolist

This is a simple todo app that allows you to add and remove tasks.

## Get started

### Prerequisites

* Docker installed on your machine

1. Clone this repository to your local machine:
```bash
git clone https://github.com/mokuit01/todolist.git
```
2. Navigate to the project directory:
```bash
cd todolist
```

## Usage

1. Open the `docker-compose.yml` file to update the `BACKEND_URL` variable if necessary (default is: http://localhost:8080)

2. Start the application by running Docker Compose:
```bash
docker-compose up
```

The postgres database will start on port 5432, The backend on port 8080 and the frontend on port 3000.

On local machines the frontend is accessable on http://localhost:3000.

## Contribute

### Prerequisites

* Node.js installed on your machine

### Build and debug frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install packages:
```bash
npm install
```
3. Build Application:
```bash
npm run build
```
4. Start Application:
```bash
npm run preview
```

The frontend for debugging will be accessable on http://localhost:4173.

### Build Docker Image

1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Run Docker build:
```bash
docker build -t todolist-frontend .
```