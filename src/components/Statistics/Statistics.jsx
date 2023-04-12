import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend } from 'recharts';

const Statistics = () => {
    const data = [
        {
          Assignment: "1",
          Marks: 57,
        },
        {
          Assignment: "2",
          Marks: 53,
        },
        {
          Assignment: "3",
          Marks: 60,
        },
        {
          Assignment: "4",
          Marks: 60,
        },
        {
          Assignment: "5",
          Marks: 60,
        },
        {
          Assignment: "6",
          Marks: 60,
        },
        {
          Assignment: "7",
          Marks: 60,
        },
        {
            Assignment: "8",
            Marks: 58,
          },
      ];
    return (
        <div className='m-12 align-middle'>
           <AreaChart
            width={1200}
            height={400}
            data={data}
            >
                {/* <Area dataKey="Assignment" type="monotone" stroke="#8884d8" fill="#8884d8" ></Area> */}
                <Area dataKey="Marks" type="monotone" stroke="#8884d8" fill="#8884d8" ></Area>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid></CartesianGrid>
            </AreaChart>

            <div className='text-center'>
                <h1>Figure: Assignment Marks</h1>
            </div>

        </div>
    );
};

export default Statistics;