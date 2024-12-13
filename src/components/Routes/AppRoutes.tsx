import { Route, Routes } from "react-router-dom";
import RegisterUser from "../AdminDashboard/RegisterUser";
import AdminDashBoard from "../AdminDashboard/AdminDashboard";
import DashBoard from "../AdminDashboard/DashBoard";
import Attendance from "../AdminDashboard/Attendance";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/admindashboard" element={<AdminDashBoard children={<DashBoard />} />} />
            <Route path="/admindashboard/registeruser" element={<AdminDashBoard children={<RegisterUser />} />} />
            <Route path="/admindashboard/attendance" element={<AdminDashBoard children={<Attendance />} />} />
        </Routes>
    );
}
