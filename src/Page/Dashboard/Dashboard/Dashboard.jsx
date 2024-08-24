
const Dashboard = () => {

    return (
        <main className="p-8 bg-[#F8F8F8] flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#FFFFFF] shadow-lg p-6 rounded-lg">
                    <h2 className="text-[#2C3E50] font-semibold">Total Sales</h2>
                    <p className="text-3xl font-bold text-[#D4AF37]">$23,000</p>
                </div>
                <div className="bg-[#FFFFFF] shadow-lg p-6 rounded-lg">
                    <h2 className="text-[#2C3E50] font-semibold">Total Orders</h2>
                    <p className="text-3xl font-bold text-[#D4AF37]">1,200</p>
                </div>
                <div className="bg-[#FFFFFF] shadow-lg p-6 rounded-lg">
                    <h2 className="text-[#2C3E50] font-semibold">Total Customers</h2>
                    <p className="text-3xl font-bold text-[#D4AF37]">300</p>
                </div>
            </div>
            <div className="bg-[#FFFFFF] shadow-lg p-6 rounded-lg">
                <h2 className="text-[#2C3E50] font-semibold">Sales Analytics</h2>
                {/* Insert chart or graph here */}
            </div>
        </main>
    );
};

export default Dashboard;