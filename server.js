const { app } = require('./app');

// utils
const { sequelize } = require('./util/database');

// Database auth
sequelize.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err));

// Database synced with models' relations
sequelize
    .sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err));

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});