# Hotel Manager

📂 **Cấu trúc thư mục HotelManager/**

<pre> HotelManager/ ├── 📁 <b>public/</b> # Các tệp tĩnh (favicon, index.html, manifest.json) ├── 📁 <b>src/</b> # Mã nguồn chính │ ├── 📁 <b>assets/</b> # Ảnh, font, icons, CSS, SCSS... │ ├── 📁 <b>components/</b> # Các component dùng chung │ │ ├── 📁 <b>ui/</b> # Các component UI chung (Button, Modal, Input) │ │ ├── 📁 <b>layout/</b> # Các Layout như Navbar, Sidebar, Footer │ │ ├── 📁 <b>hooks/</b> # Custom hooks (useAuth, useTheme...) │ │ ├── 📁 <b>utils/</b> # Hàm tiện ích (formatDate, debounce...) │ ├── 📁 <b>pages/</b> # Các trang (Home, About, Dashboard...) │ │ ├── 📁 Home/ │ │ ├── 📁 About/ │ │ ├── 📁 Dashboard/ │ ├── 📁 <b>store/</b> # Quản lý state (Redux, Zustand...) │ │ ├── 📁 slices/ # Redux slices (authSlice, userSlice) │ │ ├── 📝 index.ts # Combine các reducers │ ├── 📁 <b>routes/</b> # Cấu hình Router │ │ ├── 📝 privateRoutes.ts # Route yêu cầu đăng nhập │ │ ├── 📝 publicRoutes.ts # Route không yêu cầu đăng nhập │ │ ├── 📝 index.tsx # App Router chính │ ├── 📁 <b>services/</b> # API services (Axios, Fetch) │ │ ├── 📝 authService.ts # Service xác thực │ │ ├── 📝 userService.ts # Service người dùng │ ├── 📁 <b>config/</b> # Cấu hình chung (axios, env, theme...) │ │ ├── 📝 axios.ts # Cấu hình axios │ │ ├── 📝 env.ts # Load biến môi trường │ │ ├── 📝 theme.ts # Dark/Light Theme config │ ├── 📁 <b>types/</b> # Chứa TypeScript types │ │ ├── 📝 user.ts # Định nghĩa kiểu dữ liệu User │ │ ├── 📝 auth.ts # Định nghĩa kiểu dữ liệu Auth │ ├── 📝 App.tsx # Component gốc của ứng dụng │ ├── 📝 main.tsx # Entry point của ứng dụng ├── 📝 .env # Biến môi trường ├── 📝 tsconfig.json # Cấu hình TypeScript ├── 📝 tailwind.config.js # Cấu hình Tailwind CSS ├── 📝 package.json # Danh sách dependencies ├── 📝 vite.config.ts # Cấu hình Vite ├── 📝 README.md # Tài liệu dự án </pre>

## 🚀 Giới thiệu

Dự án này là một ứng dụng React hiện đại được xây dựng với:

- ⚡ **Vite** - Công cụ build nhanh
- 🎨 **Tailwind CSS** - Thiết kế giao diện dễ dàng
- 🏗 **Redux/Zustand** - Quản lý state hiệu quả
- 🔄 **React Router** - Điều hướng giữa các trang
- 🔐 **Authentication** - Quản lý xác thực người dùng
- 🔥 **TypeScript** - Hỗ trợ kiểu dữ liệu mạnh mẽ

## 📦 Cài đặt

```sh
npm install