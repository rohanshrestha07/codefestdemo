import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function DashBoard() {
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
                <div className='profile flex items-center gap-4'>
                    <div className='bg-red-600 h-16 w-16 rounded-full'>
                        <img src="" alt="" />
                    </div>
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
                    <h3 className="text-5xl font-bold">30</h3>
                    <p className="text-lg font-bold text-gray-400">Review</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow space-y-2">
                    <h3 className="text-5xl font-bold">25</h3>
                    <p className="text-lg font-bold text-gray-400">Pending Client</p>
                </div>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-lg font-bold mb-4">Projects</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span>Material XD Version</span>
                            <span className="text-gray-500">60%</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-md shadow">
                    <h3 className="text-lg font-bold mb-4">Orders Overview</h3>
                    <ul className="space-y-2">
                        <li>$2400, Design changes - 22 Dec 7:20 PM</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}