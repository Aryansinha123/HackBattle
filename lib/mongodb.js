import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  // Avoid throwing at import time (breaks Next.js build). Warn instead.
  console.warn("⚠️ MONGODB_URI is not set. Database connections will be skipped.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    if (!MONGODB_URI) {
      // Skip connecting if no URI is provided; return null so callers can handle gracefully
      cached.promise = Promise.resolve(null);
    } else {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => mongoose);
    }
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
