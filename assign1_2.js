"use strict";
let bookTitle = "Red dead Redemption 2";
let isbn = "123-456-789";
let price = 1500;
let bookSummary = [bookTitle, price];
let isAvailable = true;
let priceAfterDiscount = price - price * 0.15; // หักส่วนลด 15%
let isPremium = price > 500; // ราคาสูงไหม
let canDisplay = isPremium && isAvailable; // จัดแสดงได้ไหม
console.log(`ชื่อหนังสือ: ${bookTitle} (ISBN: ${isbn})`);
console.log(`ราคา: ${price} บาท -> หลังลด 15%: ${priceAfterDiscount} บาท`);
console.log(`Tuple สรุป: [${bookSummary[0]}, ${bookSummary[1]}]`);
console.log(`Premium: ${isPremium}, ว่าง: ${isAvailable}`);
console.log(`จัดแสดงหน้าตู้โชว์ได้: ${canDisplay}`);
