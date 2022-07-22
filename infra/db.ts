import * as mongoose from "mongoose";

class Database {
  private DB_URL = "mongodb://localhost:27017/produtos";

  createConnection() {
    mongoose.connect(this.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
  }
}

export default Database;


