"use client";

import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register components globally
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

// Registering required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PageCompetitions = () => {
  // Sample data for the charts
  const readingProgressData = {
    labels: ['اليوم 1', 'اليوم 2', 'اليوم 3', 'اليوم 4', 'اليوم 5'], // Days for the last 5 days
    datasets: [
      {
        label: 'عدد الصفحات المقروءة',
        data: [20, 35, 50, 30, 40], // Sample pages read per day
        borderColor: '#4CAF50', // Line color
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4, // Smooth line
        fill: true,
      },
    ],
  };

  const readingChallengeData = {
    labels: ['مجموع الكتب', 'الكتب المقروءة'],
    datasets: [
      {
        data: [20, 5], // Total books in challenge vs books read
        backgroundColor: ['#4CAF50', '#FFC107'], // Colors for different sections
        hoverOffset: 4,
      },
    ],
  };

  const participantsData = [
    { name: "أحمد", booksRead: 10 },
    { name: "سارة", booksRead: 5 },
    { name: "محمد", booksRead: 7 },
    { name: "فاطمة", booksRead: 12 },
    { name: "يوسف", booksRead: 15 },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 bg-[#FAF3E0] rounded-lg shadow-xl">
      {/* Title Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1E3A8A]">فليتنافس المتنافسون</h1>
        <p className="mt-3 text-lg text-[#4A4A4A]">تابع تقدمك في التحدي القرائي وتنافس مع الآخرين!</p>
      </header>

      {/* Top Section with Graphs */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left - Reading Challenge Progress */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">تقدم التحدي القرائي</h2>
          <Doughnut data={readingChallengeData} />
        </div>

        {/* Right - Reading Progress over 5 Days */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">تقدمك في الأيام الخمسة الماضية</h2>
          <Line data={readingProgressData} />
        </div>
      </section>

      {/* Bottom Section - Participant Achievements */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">إنجازات المشاركين</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="text-[#1E3A8A]">
              <th className="px-4 py-2 text-left">اسم المشترك</th>
              <th className="px-4 py-2 text-left">عدد الكتب المقروءة</th>
            </tr>
          </thead>
          <tbody>
            {participantsData.map((participant, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{participant.name}</td>
                <td className="px-4 py-2">{participant.booksRead}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PageCompetitions;
