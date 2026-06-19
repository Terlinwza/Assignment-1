"use strict";
let productName = "หูฟังไร้สาย";
let pricePerUnit = 500;
let quantity = 3;
let isMember = true;
let totalPrice = pricePerUnit * quantity;
let hasDiscount = totalPrice > 1000 || isMember;
// 4. คำนวณราคาจริงหลังหักส่วนลด
let finalPrice = hasDiscount ? totalPrice * 0.90 : totalPrice;
// 5. แสดงผลด้วย Template Literals
console.log(`ชื่อสินค้า: ${productName} จำนวน: ${quantity} ชิ้น`);
console.log(`ราคารวมทั้งหมด: ${totalPrice} บาท`);
console.log(`ได้รับส่วนลด: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท`);
