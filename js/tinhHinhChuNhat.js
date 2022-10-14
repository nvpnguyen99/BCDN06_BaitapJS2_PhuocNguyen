/** Mô hình 3 khối
 *  Khối 1: Input
 *          Chiều rộng, chiều dài hình chữ nhật
 *          recWidth, recLength
 *  Khối 2: các bước xử lý
 *          B1: Lấy giá trị từ form
 *          B2: Lập công thức tính toán
 *          diện tích = chiều rộng * chiều dài
 *          s = recWidth * recLength
 *          chu vi = (chiều rộng + chiều dài) *2
 *          p = (recWidth + recLength) * 2 
 *          B3: Thông báo kết quả 
 *          Gán hàm tính toán vào sự kiện onclick của button
  * Khối 3: Output
 *          Diện tích, chu vi hình chữ nhật
 *          p,s
 */

function tinhHinhChuNhat() {
    var recWidth = document.getElementById("recWidth").value;
    var recLength = document.getElementById("recLength").value;

    var s = recWidth * recLength;
    var p = (Number(recWidth) + Number(recLength)) * 2;

    document.getElementById("hinhChuNhatResult").innerHTML = "Diện tích hình chữ nhật: "  + s + "<br>Chu vi hình chữ nhật: " + p;
}
document.getElementById("hinhChuNhatBtn").onclick = tinhHinhChuNhat;