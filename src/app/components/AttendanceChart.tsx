"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from "next/image";
const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 43,
   
  },
  {
    name: 'Tue',
    present: 59,
    absent: 42,
   
  },
  {
    name: 'Wed',
    present: 60,
    absent: 40,
 
  },
  {
    name: 'Thu',
    present: 58,
    absent: 40,
  
  },
  {
    name: 'Fri',
    present: 59,
    absent: 41,

  },
  {
    name: 'Sat',
    present: 59,
    absent: 44,

  },
 
];

const AttendanceChart = () => {
  return <div className='bg-white shadow-md rounded-lg p-4 h-full'>
    <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold' >Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
    </div>
    <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"transparent", boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",backgroundColor:"rgba(0,0,0,0.5)",  }} labelStyle={{ color: 'white' }}  itemStyle={{ color: 'yellow' }} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
          <Bar dataKey="present" fill="#4285F4" legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="absent" fill="#F4B400"  legendType='circle' radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    
  
}

export default AttendanceChart