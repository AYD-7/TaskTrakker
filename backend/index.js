const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

app.get("/", (req, res) => {
    res.send("Hello from the TaskTrakker backend!");
});

const toDoArr = [
    {
        id: 1,
        task: "Create all APIs for the TaskTrakker",
        tags: ["backend", "api", "urgent", "nodejs"],
        status: "in-progress",
    },
    {
        id: 2,
        task: "Design the frontend layout for TaskTrakker",
        tags: ["frontend", "design", "ui", "react"],
        status: "not-started",
    },
    {
        id: 3,
        task: "Set up the database schema", 
        tags: ["database", "schema", "mongodb", "backend"],
        status: "completed",
    },
    {
        id: 4,
        task: "Implement user authentication",
        tags: ["security", "authentication", "backend", "nodejs"],
        status: "in-progress",
    },
    {
        id: 5,
        task: "Write unit tests for the backend APIs",
        tags: ["testing", "backend", "api", "nodejs"],
        status: "not-started",
    },
]
    console.log("To do list:", toDoArr);

app.get("/todos", (req, res) => {
    res.json(toDoArr);
    
})