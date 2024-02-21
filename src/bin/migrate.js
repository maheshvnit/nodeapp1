// bin/migrate.js

var db = require('../db/database.js');
db.sequelize.sync();