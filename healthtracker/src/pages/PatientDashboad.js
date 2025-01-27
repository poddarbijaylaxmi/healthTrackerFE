import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Card, CardHeader, CardContent } from "../components/ui/card";

const PatientDashboard = () => {
  const healthMetrics = [
    { name: "Blood Sugar Levels", value: "120 mg/dL" },
    { name: "Blood Pressure", value: "120/80 mmHg" },
    { name: "Weight", value: "70 kg" },
  ];

  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Blood Sugar Trends",
        data: [110, 115, 120, 125, 118, 122, 124],
        fill: false,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
      y: {
        title: {
          display: true,
          text: "Blood Sugar Levels (mg/dL)",
        },
      },
    },
  };

  const healthTips = [
    "Stay hydrated",
    "Monitor your blood sugar levels regularly",
    "Follow a balanced diet",
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Patient Dashboard</h1>

      {/* Essential Metrics */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Essential Metrics</h2>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {healthMetrics.map((metric, index) => (
              <li key={index} className="flex justify-between">
                <span>{metric.name}</span>
                <span className="font-medium">{metric.value}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Chart for Recent Trends */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Trends</h2>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <Line data={chartData} options={chartOptions} />
          </div>
        </CardContent>
      </Card>

      {/* Health Tips */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Health Tips</h2>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-4 space-y-1">
            {healthTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDashboard;
