// ✅ server.js — ES Module Compatible
import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

// ✅ Basic Auth Middleware
const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Restricted"');
    return res.status(401).send("Authentication required.");
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
  const [username, password] = credentials.split(":");

  const validUser = process.env.APP_USER || "TA22team";
  const validPass = process.env.APP_PASS || "TA22team";

  if (username === validUser && password === validPass) {
    return next();
  } else {
    res.setHeader("WWW-Authenticate", 'Basic realm="Restricted"');
    return res.status(401).send("Invalid credentials.");
  }
};

// 🔒 Apply auth to all routes
app.use(auth);

// ✅ DB Connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

function getSafetyStatus(value) {
  if (value <= 35) return "Safe";
  if (value <= 104) return "Moderate";
  return "Dangerous";
}

function getReason(value) {
  if (value <= 35) return "Safe — Bacteria level in the water is in safe range (0–35)";
  if (value <= 104) return "Moderate — Caution advised due to moderate Bacteria levels (36–104)";
  return "Dangerous — Swimming not advised (Bacteria level >104)";
}

// ✅ Today's Swimming Safety
app.get("/api/today-safety", async (req, res) => {
  try {
    const site = req.query.beach || "frankston";

    const [result] = await pool.query(
      `SELECT date, enterococci_level 
       FROM enterococci 
       WHERE LOWER(site_name) = LOWER(?) 
       ORDER BY date DESC 
       LIMIT 30`,
      [site]
    );

    if (!result.length) {
      return res.json({ status: "No Data", reason: "No safety data found." });
    }

    const avg = result.reduce((sum, row) => sum + (row.enterococci_level || 0), 0) / result.length;

    const simulated = avg + Math.round(Math.random() * 120 - 40);
    const finalValue = Math.max(0, simulated);

    res.json({
      status: getSafetyStatus(finalValue),
      reason: getReason(finalValue),
      date: new Date().toISOString().split("T")[0],
    });
  } catch (err) {
    console.error("/api/today-safety error:", err);
    res.status(500).send("Server error");
  }
});

// ✅ 7-Day Prediction
app.get("/api/predict", async (req, res) => {
  try {
    const site = req.query.beach || "frankston";
    const [rows] = await pool.query(
      `SELECT date, enterococci_level 
       FROM enterococci 
       WHERE LOWER(site_name) = LOWER(?) 
       ORDER BY date DESC 
       LIMIT 30`,
      [site]
    );

    if (!rows.length) {
      return res.json([]);
    }

    const avg = rows.reduce((sum, row) => sum + (row.enterococci_level || 0), 0) / rows.length;

    const predictions = Array.from({ length: 7 }, (_, i) => {
      const predicted = avg + Math.round(Math.random() * 120 - 40);
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + i);
      return {
        date: futureDate.toISOString().split("T")[0],
        status: getSafetyStatus(predicted),
        reason: getReason(predicted),
      };
    });

    res.json(predictions);
  } catch (err) {
    console.error("/api/predict error:", err);
    res.status(500).send("Prediction error");
  }
});

// ✅ Serve Frontend (Vue build)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "../../frontend/dist");

app.use(express.static(frontendPath));

// Catch-all route for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
