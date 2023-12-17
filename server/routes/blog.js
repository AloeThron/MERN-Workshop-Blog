const express = require("express"); // การ import module express ที่จำเป็นในการสร้าง Router
const router = express.Router(); // สร้าง instance ของ Router จาก Express.
const { create, getAllblogs, singleBlog, remove, update } = require("../controllers/blogController");

router.post("/create", create); // กำหนดการทำงานของเส้นทาง (Route) ที่เป็น HTTP GET request สำหรับเส้นทาง "/api" ซึ่งจะถูกเชื่อมต่อกับ create

router.get("/blogs", getAllblogs)

router.get("/blog/:slug", singleBlog)

router.delete("/blog/:slug", remove)

router.put("/blog/:slug", update)

module.exports = router; // ทำการส่ง Router ที่ถูกกำหนดเส้นทางไว้ออกไปเพื่อให้สามารถนำไปใช้ในส่วนอื่นของโปรเจคได้


