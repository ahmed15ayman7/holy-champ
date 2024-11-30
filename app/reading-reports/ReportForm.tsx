import { useState } from "react";

interface ReportFormProps {
  closeForm: () => void;
}

const ReportForm = ({ closeForm }: ReportFormProps) => {
  const [formData, setFormData] = useState({
    readerName: "اسم القارئ", // Auto-fill
    hijriDate: "1446-06-10", // Auto-fill (current Hijri date)
    bookOfTheDay: "",
    pagesRead: "",
    missedPages: 5, // Default missed pages
    isFinished: "no", // default value
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Report Submitted", formData);
    closeForm(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">إضافة تقرير قرائي</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">تاريخ اليوم الهجري</label>
            <input
              type="text"
              name="hijriDate"
              value={formData.hijriDate}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">كتاب اليوم</label>
            <input
              type="text"
              name="bookOfTheDay"
              value={formData.bookOfTheDay}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">الصفحات المقروءة اليوم</label>
            <input
              type="number"
              name="pagesRead"
              value={formData.pagesRead}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">هل أنهيت الكتاب؟</label>
            <select
              name="isFinished"
              value={formData.isFinished}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="no">لا</option>
              <option value="yes">نعم</option>
            </select>
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-[#FFD700] text-[#1E3A8A] rounded-md hover:bg-[#FFB600]"
          >
            إضافة التقرير
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportForm;
