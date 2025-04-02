// ใช้ require เพื่อเชื่อมต่อกับ db.js
const db = require('./server/db');

// ตัวอย่างการ query ข้อมูลจากฐานข้อมูล
db.query('SELECT * FROM equipment', (err, rows) => {
  if (err) {
    console.error('Error fetching data: ', err);
  } else {
    console.log('Equipment data: ', rows);
  }
});

const axios = require('axios');

// URL ของ API ที่รันในเซิร์ฟเวอร์
const apiUrl = 'http://localhost:8080/index.php?route=/database/structure&db=webdb';

// การดึงข้อมูลจาก API
axios.get(apiUrl)
  .then(response => {
  console.log('Database structure data:', response.data);  // ข้อมูลจาก API
  })
  .catch(error => {
  console.error('Error fetching data:', error);
  });

// ตัวอย่างการเพิ่มข้อมูลใหม่ไปยังฐานข้อมูลผ่าน API
const newEquipment = {
  name: 'New Equipment',
  category: 'Category A',
  status: 'Available'
};

axios.post(apiUrl, newEquipment)
  .then(response => {
  console.log('Added new equipment:', response.data);
  })
  .catch(error => {
  console.error('Error adding equipment:', error);
  });


