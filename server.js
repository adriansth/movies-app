const { app } = require('./app');

// utils
const { sequelize } = require('./util/database');

sequelize.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch(err => console.log(err));

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});