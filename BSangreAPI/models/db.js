const {Client} = require('pg');
const dbconfig = require("../config/db.config.js");

//Crear conexion con posgresql
const con = new Client({
    host:dbconfig.HOST,
    user:dbconfig.USER,
    password:dbconfig.PASSWORD,
    database:dbconfig.DB,
    port:dbconfig.PORT
});

//abrir conexion
con.connect((error)=>{
    if(error) console.error('connection error', error.stack);
    else console.log("Conexion correcta a la base de datos");
});


module.exports = con;

// const dbConfig = require("../config/db.config");
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// module.exports = db;

// db.Imagen = require("./Imagen.model")(sequelize, Sequelize);
// db.Publicaciones = require("./publicacion.model.js")(sequelize, Sequelize);

// db.Imagen.hasMany(db.Publicaciones, {
//     foreignKey: "idImagen",
// });

// db.Publicaciones.belongsTo(db.Imagen, {
//     foreignKey: "idImagen",
// });