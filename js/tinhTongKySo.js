/** Mô hình 3 khối
 * Khối 1: Input
 *         1 số có 2 chữ số
 *          num, ten, unit
 * Khối 2: Các bước xử lý
 *        B1: Lấy giá trị từ form
 *        B2: Lập công thức tính toán
 *          số hàng chục = số / 10
 *          ten = num / 10
 *          số hàng đơn vị = số % 10
 *          unit = num % 10
 *          tổng 2 ký số = số hàng chục + số hàng đơn vị
 *          sum = ten + unit
 *        B3: Thông báo kết quả
 *          gắn hàm tính toán cho sự kiện click của button
 * Khối 3: Output
 *          tổng 2 ký số của số vừa nhập 
 *          sum
 */

function tinhTongKySo() {
    var num = document.getElementById("num").value;
    var ten = 0;
    var unit = 0;
    var sum = 0;

    ten = Math.floor(num / 10);
    unit = num % 10;
    sum = ten + unit;

    document.getElementById("tongKySoResult").innerHTML = "Tổng ký số: " + sum;
}

 document.getElementById("tongKySoBtn").onclick = tinhTongKySo;