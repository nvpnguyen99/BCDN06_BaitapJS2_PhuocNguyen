/** Mô hình 3 khối
 * Khối 1: Input
 *      5 số thực
 *      num1, num2, num3, num4, num5
 * Khối 2: Các bước xử lý
 *      B1: Lấy giá trị từ form
 *      B2: Lập công thức tính toán
 *          số trung bình = tổng 5 số / 5
 *          avg = (num1 + num2 + num3 + num4 + num5) / 5
 *      B3: Thông báo kết quả
 *      Gắn hàm vào sự kiện click của button
 * Khối 3: Output
 *      số trung bình của 5 số thực
 *      avg
 */

function tinhTrungBinh() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    var avg = 0;

    avg = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;

    document.getElementById("soTrungBinhResult").innerHTML = "Số trung bình: " + avg;
}
    document.getElementById("btnTrungBinh").onclick = tinhTrungBinh;
    