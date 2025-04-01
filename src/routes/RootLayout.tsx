import { Outlet } from "react-router-dom";
import NavBar from '../components/layout/Navbar/Navbar.tsx'

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <Outlet /> {/* Đây là nơi các trang con sẽ hiển thị */}
    </div>
  );
};

export default RootLayout;