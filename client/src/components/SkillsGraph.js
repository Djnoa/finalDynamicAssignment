import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts';

const SkillsGraph = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/skills')
            .then(response => response.json())
            .then(data => {
                
                setSkills(data);
            })
            .catch(error => console.error('Error fetching skills:', error));
    }, []);

    return (
        <BarChart
            width={800}
            height={400}
            data={skills}
            layout="vertical"
            margin={{
                top: 0, right: 0, left: -50, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis type="category" dataKey="skill_name" />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar dataKey="Level" fill="#8884d8" barSize={20}>
                <LabelList dataKey="Level" position="right" />
            </Bar>
        </BarChart>
    );
};

export default SkillsGraph;
