/** Mô hình 3 khối
 *  Khối 1: Input
 *          Giá USD, số tiền USD cần quy đổi
 *          valueUSD, amountUSD
 *  Khối 2: Các bước cần xử lý
 *          B1: Lấy giá trị từ form
 *          B2: Lập công thức tính toán
 *          tiền VND sau quy đổi = số tiền USD * giá USD
 *          amountVND = amountUSD * valueUSD
 *          B3: Hiển thị kết quả
 *          Gắn hàm tính toán vào sự kiện click của button  
 *  Khối 3: Output
 *          số tiền VND sau quy đổi
 *          amountVND
 */

function quyDoiTien() {
    var valueUSD = document.getElementById("valueUSD").value;
    var amountUSD = document.getElementById("amountUSD").value;

    var amountVND = amountUSD * valueUSD;

    document.getElementById("moneyExchangeResult").innerHTML = "số tiền VND: " + amountVND.toLocaleString() + " VND";
}

    document.getElementById("calAmountBtn").onclick = quyDoiTien;