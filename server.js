const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/Task");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Task Management API is running"
    });
});

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});