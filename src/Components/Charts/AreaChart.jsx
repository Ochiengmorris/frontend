import React from 'react';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Invitations } from '../../Data/InvitationData';

function AreaChartComp() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={Invitations}
                margin={{ right: 30 }}
            >
                <YAxis />
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="5 5" />
                <Legend />
                <Area
                    type="monotone"
                    dataKey="Active"
                    stroke="#2563eb"
                    fill="#1f5eb3"
                />
                <Area
                    type="monotone"
                    dataKey="Dormant"
                    stroke="#7c3aed"
                    fill="#9260fe"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default AreaChartComp;
