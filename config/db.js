const { connect } = require("mongoose");

const connectDB = async () => {
  const DB = await connect(process.env.MONGO_DB_URI);
  // console.log('DB :>> ', DB.connections);
  console.log(`MongoBD are connected on \n PORT: ${DB.connection.port}, \n NAME: ${DB.connection.name} \n HOST: ${DB.connection.host}`)

};

module.exports = connectDB;
