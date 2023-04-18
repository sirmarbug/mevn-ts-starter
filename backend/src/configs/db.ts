import mongoose from "mongoose";

const connect = async () => {
  const { DB_URL } = process.env
  try {
    await mongoose.connect(DB_URL || 'mongodb://localhost:27017/test-app')
    console.log("Successfully connected to database")
  } catch (e) {
    console.log("Database connection failed. Exiting now...")
    console.error(e)
    process.exit(1)
  }
}

export default connect
