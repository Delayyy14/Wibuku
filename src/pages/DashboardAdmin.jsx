import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import Sidebar from '../component/Sidebar';
import NavbarAdmin from '../component/navbarAdmin';
import { useNavigate } from 'react-router-dom';
import img from '../image/admin.jpg';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f7f', '#00C49F'];

function DashboardAdmin() {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    fetch('https://68775431dba809d901eec221.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const chartData = products.map(product => ({
    name: product.title,
    Value: parseInt(product.price),
  }));

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-70' : 'w-0'} transition-all duration-300 overflow-hidden bg-gray-900 text-white`}>
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        <NavbarAdmin toggleSidebar={toggleSidebar} />

        <main className="p-6 bg-gray-100 min-h-screen">
          <div className="bg-sky-200 p-4 rounded shadow mb-6 flex justify-between items-center w-full">
            
            <div>
              <h2 className="text-xl font-semibold text-black">Welcome to the Admin Dashboard</h2>
              <p className='text-sm font-semibold text-black'>Siap mengatur stok figure, kaos, dan merchandise anime hari ini?</p>
              </div>


            <div className='flex items-center mt-4'>
              <img src={img} alt="hai" className='w-20'/>
            </div>   
          </div>         
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 justify-between mt-10">
            {/* Pie Chart */}
            <div className='bg-white'> Halo</div>
            <div className="bg-white p-2 rounded shadow h-80">
              <PieChart width={300} height={300}>
                <Pie data={chartData} cx="50%" cy="50%" innerRadius={55} outerRadius={100} fill="#8884d8" paddingAngle={5} dataKey="Value">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </div>

            {/* Line Chart */}
            <div className="bg-white p-4 rounded shadow h-80 col-span-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Value" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardAdmin;
