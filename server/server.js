const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoute = require("./routes/blog");
const authRoute = require("./routes/auth")

const app = express(); // สร้าง instance ของ Express application

// connect cloud database
mongoose
  .connect(process.env.DATABASE) // เชื่อมต่อกับฐานข้อมูล MongoDB โดยใช้ URL ที่เก็บอยู่ใน .env
  .then(() => console.log("Connecting success")) // เมื่อการเชื่อมต่อกับฐานข้อมูลสำเร็จ แสดงข้อความ "Connecting success"
  .catch((err) => console.log(err)); //  หากมีข้อผิดพลาดเกิดขึ้นในการเชื่อมต่อ เช่น URL ไม่ถูกต้องหรือฐานข้อมูลไม่พร้อมใช้งาน จะแสดงข้อผิดพลาดที่เกิดขึ้น

// middleware
app.use(express.json()); // ใช้ในการ parse ข้อมูลที่ส่งมาในรูปแบบ JSON เพื่อทำให้สามารถเข้าถึงได้ในรูปแบบของ JavaScript object
app.use(cors()); // ทำให้เว็บแอปพลิเคชันสามารถทำ CORS (Cross-Origin Resource Sharing) ได้โดยอนุญาตให้ทำ HTTP requests จาก domain อื่น
app.use(morgan("dev")); // ช้ในการ log ข้อมูลการ request และ response ของ server ในรูปแบบ "dev" ที่มีระดับของการ log เป็นระดับพื้นฐาน

// route
app.use("/api", blogRoute); // กำหนดให้ middleware นี้ทำงานกับเส้นทางที่เริ่มต้นด้วย "/api" ซึ่งจะถูกเชื่อมต่อกับ blogRoute ที่ถูกนำเข้ามา
app.use("/api", authRoute); // กำหนดให้ middleware นี้ทำงานกับเส้นทางที่เริ่มต้นด้วย "/api" ซึ่งจะถูกเชื่อมต่อกับ authRoute ที่ถูกนำเข้ามา

const port = process.env.PORT || 8080; // กำหนด port ที่ server จะทำงาน ถ้าไม่ได้กำหนดไว้ใน environment variable จะใช้ค่า default เป็น 8080
app.listen(port, () => console.log(`Start server in port ${port}`)); // เริ่มต้น server ให้เริ่มทำงานบน port ที่กำหนดไว้ และ log ข้อความว่าเริ่มทำงาน server ที่ port นั้น
