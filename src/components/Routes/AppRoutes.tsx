import { Route, Routes } from "react-router-dom";
import RegisterUser from "../AdminDashboard/RegisterUser";
import Attendance from "../AdminDashboard/Attendance";
import PendingBooking from "../AdminDashboard/PendingBooking";
import HostelerList from "../AdminDashboard/HostelerList";
import AdminDashBoard from "../AdminDashboard/AdminDashboard";
import DashBoard from "../AdminDashboard/DashBoard";
import CreateHostel from "../AdminDashboard/CreateHostel";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/admindashboard" element={<AdminDashBoard children={<DashBoard />} />} />
            <Route path="/admindashboard/registeruser" element={<AdminDashBoard children={<RegisterUser />} />} />
            <Route path="/admindashboard/attendance" element={<AdminDashBoard children={<Attendance />} />} />
            <Route path="/admindashboard/pendingbooking" element={<AdminDashBoard children={<PendingBooking />} />} />
            <Route path="/admindashboard/hostelerlist" element={<AdminDashBoard children={<HostelerList/>} />} />
            <Route path="/admindashboard/createHostel" element={<AdminDashBoard children={<CreateHostel/>} />} />
        </Routes>
    );
}
