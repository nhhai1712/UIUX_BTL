import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const COLORS = [
  { status: 'Completed', color: '#00FF00' },
  { status: 'In Progress', color: '#0000CD' },
  { status: 'Not Started', color: '#FF8C00' },
];

function MyPieChart({ data }) {
  return (
    <PieChart width={320} height={320}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="status"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS.find(c => c.status === entry.status)?.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default MyPieChart;