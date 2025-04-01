Hotel Manager

📁 Cấu trúc thư mục
HotelManager/
├── public/                  # Các tệp tĩnh (favicon, index.html, manifest.json)
├── src/                     # Mã nguồn chính
│   ├── assets/              # Ảnh, font, icons, CSS, SCSS...
│   ├── components/          # Các component dùng chung
│   │   ├── ui/              # Các component UI chung (Button, Modal, Input)
│   │   ├── layout/          # Các Layout như Navbar, Sidebar, Footer
│   │   ├── hooks/           # Custom hooks (useAuth, useTheme...)
│   │   ├── utils/           # Hàm tiện ích (formatDate, debounce...)
│   ├── pages/               # Các trang (Home, About, Dashboard...)
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Dashboard/
│   ├── store/               # Quản lý state (Redux, Zustand...)
│   │   ├── slices/          # Redux slices (authSlice, userSlice)
│   │   ├── index.ts         # Combine các reducers
│   ├── routes/              # Cấu hình Router
│   │   ├── privateRoutes.ts # Route yêu cầu đăng nhập
│   │   ├── publicRoutes.ts  # Route không yêu cầu đăng nhập
│   │   ├── index.tsx        # App Router chính
│   ├── services/            # API services (Axios, Fetch)
│   │   ├── authService.ts   # Service xác thực
│   │   ├── userService.ts   # Service người dùng
│   ├── config/              # Cấu hình chung (axios, env, theme...)
│   │   ├── axios.ts         # Cấu hình axios
│   │   ├── env.ts           # Load biến môi trường
│   │   ├── theme.ts         # Dark/Light Theme config
│   ├── types/               # Chứa TypeScript types
│   │   ├── user.ts          # Định nghĩa kiểu dữ liệu User
│   │   ├── auth.ts          # Định nghĩa kiểu dữ liệu Auth
│   ├── App.tsx              # Component gốc của ứng dụng
│   ├── main.tsx             # Entry point của ứng dụng
├── .env                     # Biến môi trường
├── tsconfig.json            # Cấu hình TypeScript
├── tailwind.config.js       # Cấu hình Tailwind CSS
├── package.json             # Danh sách dependencies
├── vite.config.ts           # Cấu hình Vite
├── README.md                # Tài liệu dự án
🚀 Giới thiệu
Dự án này là một ứng dụng React hiện đại được xây dựng với:

⚡ Vite - Công cụ build nhanh

🎨 Tailwind CSS - Thiết kế giao diện dễ dàng

🏗 Redux/Zustand - Quản lý state hiệu quả

🔄 React Router - Điều hướng giữa các trang

🔐 Authentication - Quản lý xác thực người dùng

🔥 TypeScript - Hỗ trợ kiểu dữ liệu mạnh mẽ

📦 Cài đặt
npm install

🏃‍♂️ Chạy dự án
npm run dev