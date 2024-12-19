"use client";

import { useState } from "react";
import ReportForm from "./ReportForm";
import ReportTable from "./ReportTable";

const ReadingReportsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFe, setIsFe] = useState(0);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="max-w-full p-6 bg-[#FAF3E0] rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-[#1E3A8A] text-center mb-6">
        صفحة التقارير القرائية
      </h1>

      <button
        onClick={handleOpenForm}
        className="py-2 px-4 bg-[#FFD700] text-[#1E3A8A] rounded-md hover:bg-[#FFB600] mt-4"
      >
        إضافة تقرير قرائي جديد
      </button>

      {/* Show Form if Opened */}
      {isFormOpen && (
        <ReportForm closeForm={handleCloseForm} setIsFe={setIsFe} />
      )}

      {/* Table to display reports */}
      <ReportTable isFe={isFe} />
    </div>
  );
};

export default ReadingReportsPage;
