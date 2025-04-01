# README.md for Expense Manager App

## Expense Manager App

This application is designed to help users manage their expenses related to foreign orders. It provides features for calculating expenses, summarizing profits, and tracking items over a 30-day period.

## Hướng dẫn cài đặt và chạy ứng dụng

### Yêu cầu hệ thống
- Node.js (phiên bản 14.x trở lên)
- npm (thường được cài cùng Node.js)

### Các bước cài đặt

1. Clone dự án về máy:
```bash
git clone <đường-dẫn-repository>
```

2. Di chuyển vào thư mục dự án:
```bash
cd expense-manager-app-1
```

3. Cài đặt các thư viện cần thiết:
```bash
npm install
```

4. Khởi tạo cơ sở dữ liệu:
- Database SQLite sẽ tự động được tạo khi chạy ứng dụng lần đầu
- File database sẽ được lưu tại `data/database.sqlite`

5. Chạy ứng dụng:
```bash
npm start
```

6. Truy cập ứng dụng:
- Mở trình duyệt web
- Truy cập địa chỉ: http://localhost:3000

### Cấu trúc thư mục

```
expense-manager-app-1/
├── src/                    # Mã nguồn
│   ├── components/        # Các component
│   ├── models/           # Model dữ liệu
│   ├── services/         # Xử lý logic
│   ├── config/          # Cấu hình
│   └── app.ts           # File khởi chạy
├── data/                # Thư mục chứa database
└── package.json         # Thông tin dự án và dependencies
```

### Các tính năng chính
- Quản lý thu chi
- Tính toán lợi nhuận
- Xuất báo cáo
- Lưu trữ dữ liệu cục bộ

### Hỗ trợ
Nếu gặp vấn đề, vui lòng tạo issue trên repository.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License.