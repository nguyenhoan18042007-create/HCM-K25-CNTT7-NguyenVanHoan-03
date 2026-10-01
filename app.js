
let currentOrderCode = "";
let isOrderValid = false;
let totalRevenue = 0;
let totalOders = 0;

let isruning = true;

while (isruning) {
    console.log(
`=====================================================
 Hệ Thống Thanh Toán Nhà Sách Tri Thức
 =====================================================
 1. Nhập và kiểm chuẩn mã đơn hàng
 2. Tính tiền đơn sách
 3. Thẩm định mã hồ sơ may mắn
 0. Thoát chương trình
=====================================================`
);

    let choice = prompt(`Vui lòng nhập lựa chọn của bạn (0 - 3):`);

    if (choice === null) {
        choice = "";
    }

    choice = choice.trim();

    switch (choice) {
        case "1":
    currentOrderCode = "";
    isOrderValid = false;

    let inputChoice = prompt(`Vui lòng nhập mã đơn hàng:`);

    if (inputChoice === null) {
        inputChoice = "";
    }

    inputChoice = inputChoice.trim().toUpperCase();

    if (inputChoice === "") {
        console.log(`Bạn chưa nhập mã phiếu`);
    }
    else if (inputChoice.length < 6) {
        console.log(`Lỗi: Độ dài nhỏ hơn 6 ký tự`);
    }
    else if (!inputChoice.startsWith(`BOK-`)) {
        console.log(`Lỗi: Sai tiền tố BOK-`);
    }
    else if (inputChoice.includes(` `)) {
        console.log(`Lỗi: Chứa khoảng trắng ở giữa`);
    }
    else {
        currentOrderCode = inputChoice;
        isOrderValid = true;

        console.log(`Mã đơn hàng hợp lệ!`);
        console.log(`Mã đơn hàng: ${currentOrderCode}`);
    }

    break;

        case "2":
            if (isOrderValid !== true) {
        console.log(`Chưa có mã đơn hợp lệ, vui lòng chọn Case 1 trước!`);
        break;
    }

    let bookCount;
    let pricePerBook;

    while (true) {
        let input = prompt(`Nhập số lượng cuốn sách:`);

        if (input === null) {
            console.log(`Đã hủy giao dịch!`);
            break;
        }

        input = input.trim();

        bookCount = Number(input);

        if (input === "" || !Number.isInteger(bookCount) || bookCount <= 0) {
            console.log(`Lỗi: Số lượng phải là số nguyên lớn hơn 0!`);
        } else {
            break;
        }
    }

    if (bookCount === undefined) {
        break;
    }

    while (true) {
        let input = prompt(`Nhập đơn giá sách (VNĐ):`);

        if (input === null) {
            console.log(`Đã hủy giao dịch!`);
            break;
        }

        input = input.trim();

        pricePerBook = Number(input);

        if (input === "" || !Number.isInteger(pricePerBook) || pricePerBook <= 0) {
            console.log(`Lỗi: Đơn giá phải là số nguyên lớn hơn 0!`);
        } else {
            break;
        }
    }

    if (pricePerBook === undefined) {
        break;
    }

    let baseCost = bookCount * pricePerBook;

    let discount = 0;
    if (bookCount >= 4) {
        discount = Math.round(baseCost * 0.1);
    }

    let materialFee = Math.round((baseCost - discount) * 0.08);

    let totalPayment = (baseCost - discount) + materialFee;

    totalRevenue += totalPayment;
    totalVisits++;

    console.log(`
    =====================================================
                HÓA ĐƠN Thanh Toán Đơn Hàng
    =====================================================
    ã Đơn hàng: ${inputChoice}
    Số lượng : ${bookCount}
    Đơn giá: ${pricePerBook.toLocaleString("vi-VN")} VNĐ
    Chi phí cơ sở: ${baseCost.toLocaleString("vi-VN")} VNĐ
    Tiền giảm giá: ${discount.toLocaleString("vi-VN")} VNĐ
    Phụ phí : ${materialFee.toLocaleString("vi-VN")} VNĐ
    Tổng thanh toán: ${totalPayment.toLocaleString("vi-VN")} VNĐ
    =====================================================
    `);

    currentOrderCode = "";
    isOrderValid = false;
    break;


    case "3":
            console.log(`
                Hệ thống đang update`);
            
            break;

        case "0":
            console.log(`
                Cảm ơn đã sử dụng hệ thống
                Thoát chương trình!`);
            isruning = false;
            break;

        default:
            console.log(`Lựa chọn không hợp lệ, vui lòng chọn lại!`);
    }
}

