# Dashboard & Call Center UI (demo)

Bộ giao diện mẫu **tĩnh** (HTML + CSS + một chút JavaScript) cho ứng dụng web thống kê và tổng đài: dashboard KPI với biểu đồ SVG thuần, danh sách cuộc gọi, khách hàng (góc nhìn nhân viên và quản lý), softphone minh họa, thành phần dùng lại, chế độ sáng/tối, responsive.

> Mọi tên, số điện thoại và số liệu đều **bịa**. Không có API, không có logic nghiệp vụ. Không dùng CDN hay thư viện ngoài, mở được khi không có mạng.

**Demo trực tuyến:** https://callcenter-demo.genalpha.dev
**Giấy phép:** [MIT](LICENSE) © Dương Tấn Thành

## Cách xem

Mở `index.html` bằng trình duyệt (nhấp đúp, không cần máy chủ). Giữ nguyên các tệp cùng thư mục vì liên kết là tương đối.

| Tệp | Nội dung |
|---|---|
| `index.html` | Danh sách các màn hình |
| `dashboard.html`, `dashboard-states.html` | Dashboard KPI, biểu đồ; trạng thái đang tải / rỗng / lỗi |
| `charts.html` | Biểu đồ và cách tùy biến khi có dữ liệu thật |
| `calls.html`, `calls-states.html` | Danh sách cuộc gọi, bộ lọc, trạng thái |
| `customers.html`, `customer-detail.html` | Khách hàng (nhân viên) |
| `customers-manager.html`, `customer-detail-manager.html` | Khách hàng (quản lý) |
| `softphone.html`, `call-dialog.js` | Softphone và hộp xác nhận gọi (chỉ minh họa) |
| `components.html`, `style.css` | Thành phần dùng lại, hệ thống màu/chữ/khoảng cách |

## English

A **static** UI template (plain HTML, CSS and a little JavaScript) for a statistics dashboard and call-center web app: KPI dashboard with pure-SVG charts, call list, customers (agent and manager views), a mock softphone, reusable components, light/dark mode, responsive layout. All data is fictional; there is no backend and no third-party library. Open `index.html` in a browser. Licensed under MIT.

Contact: contact@genalpha.dev
