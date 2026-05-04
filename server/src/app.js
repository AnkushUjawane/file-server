const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const authRoutes = require('./routes/auth.routes');
const fileRoutes = require('./routes/file.routes');
const shareRoutes = require("./routes/share.routes");

const authMiddleware = require('./middleware/auth.middleware');
const errorMiddleware = require('./middleware/error.middleware');
const Limiter = require('./middleware/rateLimit.middleware');

require('./models/user.model');

const app = express();

app.use(cors());
app.options("*", cors()); 

app.use(express.json());

app.use(Limiter);

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/share", shareRoutes);

app.use(errorMiddleware);

sequelize.sync()
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log("DB Error: " + err));


app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "file server is running"
    });
});

app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({
        success: true,
        message: "This is protected route",
        user: req.user,
    });
});

module.exports = app;