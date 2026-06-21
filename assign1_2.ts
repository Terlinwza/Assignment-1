let bookTitle: string = "Red dead Redemption 2";
let isbn :string = "123-456-789";
let price : number = 1500;

let bookSummary: [string, number] = [bookTitle, price]; 
let isAvailable: boolean = true;

let priceAfterDiscount: number = price - price * 0.15; // หักส่วนลด 15%
let isPremium: boolean = price > 500;                  // ราคาสูงไหม
let canDisplay: boolean = isPremium && isAvailable;     // จัดแสดงได้ไหม

console.log(`ชื่อหนังสือ: ${bookTitle} (ISBN: ${isbn})`);
console.log(`ราคา: ${price} บาท -> หลังลด 15%: ${priceAfterDiscount} บาท`);
console.log(`Tuple สรุป: [${bookSummary[0]}, ${bookSummary[1]}]`);
console.log(`Premium: ${isPremium}, ว่าง: ${isAvailable}`);
console.log(`จัดแสดงหน้าตู้โชว์ได้: ${canDisplay}`);