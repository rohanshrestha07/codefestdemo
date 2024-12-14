import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

export default function DashBoard() {
    const hostelers = [
        { name: 'John Doe', phone: '+1234567890', status: 'Active' },
        { name: 'Jane Smith', phone: '+0987654321', status: 'Inactive' },
        { name: 'Alice Johnson', phone: '+1122334455', status: 'Active' },
        { name: 'Bob Brown', phone: '+5566778899', status: 'Inactive' },
        { name: 'Charlie White', phone: '+9988776655', status: 'Active' },
        { name: 'Daisy Green', phone: '+4433221100', status: 'Inactive' },
    ];

    return (
        <main className="p-6">
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <div className='flex items-center gap-4'>
                    <MenuOutlinedIcon style={{height:'2rem'}} />
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                </div>
                <input
                    type="search"
                    placeholder="Search here"
                    className="border rounded-xl py-2 px-4 focus:outline-none focus:ring"
                />
                <div className='profile flex items-center gap-2'>
                    <img
                        src='https://via.placeholder.com/40'
                        className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                        <h1 className='font-bold text-xl'>Admin 1</h1>
                        <p>Hostel 420</p>
                    </div>
                </div>
            </header>

            {/* Statistics */}
            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-md shadow space-y-2">
                    <h3 className="text-5xl font-bold">30</h3>
                    <p className="text-lg font-bold text-gray-400">Total Hostelers</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow space-y-2">
                    <h3 className="text-5xl font-bold">25</h3>
                    <p className="text-lg font-bold text-gray-400">Present</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow space-y-2">
                    <h3 className="text-5xl font-bold">5</h3>
                    <p className="text-lg font-bold text-gray-400">Leave Requests</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow space-y-2">
                    <h3 className="text-5xl font-bold">25</h3>
                    <p className="text-lg font-bold text-gray-400">Pending Bookings</p>
                </div>
            </div>


            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Hostelers Section */}
                <div className="bg-white shadow rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Hostelers</h2>
                    <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">See all &rarr;</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600">
                    <thead className="border-b">
                        <tr>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Phone Number</th>
                        <th className="py-2 px-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hostelers.map((hosteler, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4">{hosteler.name}</td>
                            <td className="py-2 px-4">{hosteler.phone}</td>
                            <td className="py-2 px-4">
                            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                                hosteler.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'
                            }`}></span>
                            {hosteler.status}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>

                {/* Message Section */}
                <div className="bg-white shadow rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
                        <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">See all &rarr;</button>
                    </div>
                    <ul>
                        {[
                            { name: 'Lewis S. Cunningham', profile: 'https://via.placeholder.com/40',icon:<ChatOutlinedIcon/>,call:<CallOutlinedIcon/> },
                            { name: 'Sophia R. Bennett', profile: 'https://via.placeholder.com/40',icon:<ChatOutlinedIcon/>,call:<CallOutlinedIcon/> },
                            { name: 'Mason J. Clark', profile: 'https://via.placeholder.com/40',icon:<ChatOutlinedIcon/>,call:<CallOutlinedIcon/> },
                            { name: 'Emma L. Davis', profile: 'https://via.placeholder.com/40',icon:<ChatOutlinedIcon/>,call:<CallOutlinedIcon/> },
                            { name: 'Olivia P. Evans', profile: 'https://via.placeholder.com/40',icon:<ChatOutlinedIcon/>,call:<CallOutlinedIcon/> },
                            { name: 'Liam T. Robinson', profile: 'https://via.placeholder.com/40',icon:<ChatOutlinedIcon/>,call:<CallOutlinedIcon/> },
                        ].map((user, index) => (
                            <li key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                                    <div className='flex items-center justify-between '>
                                        <img
                                            src={user.profile}
                                            alt={`${user.name}'s Profile`}
                                            className="w-10 h-10 rounded-full mr-3"
                                            />
                                        <p className="text-sm font-medium text-gray-800">{user.name}</p>
                                </div>
                                <button className="text-pink-500 space-x-4 hover:text-pink-600">
                                    <ChatOutlinedIcon/>
                                    <CallOutlinedIcon/>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
