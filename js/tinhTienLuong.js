/** Mô hình 3 khối
 * Khối 1: Input
 *      Lương một ngày, số ngày làm
 *      dailySalary, numOfWorkdays
 * Khối 2: Các bước xử lý
 *      B1: Lấy giá trị từ form
 *      B2: Lập công thức tính toán
 *          tổng lương = lương mỗi ngày * số ngày làm việc
 *          totalSalary = dailySalary * numofWorkdays
 *      B3: Thông báo kết quả 
 *          Gắn hàm vào sự kiện click của button
 * Khối 3: Output
 *      Tổng lương
 *      totalSalary
 */

function tinhTienLuong() {
    var dailySalary = document.getElementById("dailySalary").value;
    var numOfWorkdays = document.getElementById("numOfWorkdays").value;
    var totalSalary = 0;

    totalSalary = dailySalary * numOfWorkdays;
    document.getElementById("txtResult").innerHTML = "Tổng tiền lương: " + totalSalary;

}
    document.getElementById("calBtn").onclick = tinhTienLuong;