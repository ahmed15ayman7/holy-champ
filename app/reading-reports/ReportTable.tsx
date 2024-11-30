const ReportTable = () => {
    // Simulated report data
    const reports = [
      {
        date: "1446-06-10", // Hijri Date
        readerName: "John Doe",
        challenge: "Book Completion",
        completedBooks: 2,
        pagesRead: 15,
        missedPages: 5,
        bookOfTheDay: "كتاب النور",
      },
      // Add more reports as needed
    ];
  
    return (
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-[#1E3A8A] text-white">
            <tr>
              <th className="px-4 py-2">التاريخ الهجري</th>
              <th className="px-4 py-2">اسم القارئ</th>
              <th className="px-4 py-2">التحدي القرائي</th>
              <th className="px-4 py-2">الكتب المنجزة</th>
              <th className="px-4 py-2">الصفحات المقروءة</th>
              <th className="px-4 py-2">الفوائت</th>
              <th className="px-4 py-2">كتاب اليوم</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{report.date}</td>
                <td className="px-4 py-2">{report.readerName}</td>
                <td className="px-4 py-2">{report.challenge}</td>
                <td className="px-4 py-2">{report.completedBooks}</td>
                <td className="px-4 py-2">{report.pagesRead}</td>
                <td className="px-4 py-2">{report.missedPages}</td>
                <td className="px-4 py-2">{report.bookOfTheDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ReportTable;
  