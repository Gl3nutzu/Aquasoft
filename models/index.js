const dbConfig = require('../config/dbConfig.js');


const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
.then(() => {
    console.log('connected..');
})
.catch(err => {
    console.log('Error' + err);
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.project = require('./projectModel.js')(sequelize, DataTypes);
db.interview = require('./interviewModel.js')(sequelize, DataTypes);
db.candidate = require('./candiatiModel.js')(sequelize, DataTypes);

db.candidate.hasMany(db.candidate, {
    foreignKey: 'Project_id',
    as: 'candidates'
});

db.interview.belongsTo(db.interview, {
    foreignKey: 'Project_id',
    as: 'projects'    
});

db.candidate.belongsToMany(db.project, {
    through: "candidatiproiecte",
});
db.project.belongsToMany(db.candidate, {
    through: "candidatiproiecte",
});


db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!');
});

module.exports = db;