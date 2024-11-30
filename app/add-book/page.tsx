"use client";

import { useState } from "react";

const AddBook = () => {
  const [formData, setFormData] = useState({
    bookName: "",
    category: "",
    author: "",
    publisher: "",
    edition: "",
    yearOfEdition: "",
    pages: "",
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
    console.log("Book Data Submitted", formData);
    // Handle form submission, e.g., sending the data to an API or storing it in a database.
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-[#FAF3E0] rounded-lg shadow-lg">
  <h1 className="text-3xl font-semibold text-[#1E3A8A] text-center mb-6">إضافة كتاب جديد</h1>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="bookName" className="block text-sm font-medium text-[#4A4A4A]">
        اسم الكتاب
      </label>
      <input
        type="text"
        id="bookName"
        name="bookName"
        value={formData.bookName}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-[#D8CAB8] rounded-md"
        required
      />
    </div>
    
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-[#4A4A4A]">
        تصنيف الكتاب
      </label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-[#D8CAB8] rounded-md"
        required
      />
    </div>

    <div>
      <label htmlFor="author" className="block text-sm font-medium text-[#4A4A4A]">
        المؤلف
      </label>
      <input
        type="text"
        id="author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-[#D8CAB8] rounded-md"
        required
      />
    </div>

    <div>
      <label htmlFor="publisher" className="block text-sm font-medium text-[#4A4A4A]">
        دار النشر
      </label>
      <input
        type="text"
        id="publisher"
        name="publisher"
        value={formData.publisher}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-[#D8CAB8] rounded-md"
        required
      />
    </div>

    <div>
      <label htmlFor="edition" className="block text-sm font-medium text-[#4A4A4A]">
        الطبعة
      </label>
      <input
        type="text"
        id="edition"
        name="edition"
        value={formData.edition}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-[#D8CAB8] rounded-md"
        required
      />
    </div>

    <div>
      <label htmlFor="yearOfEdition" className="block text-sm font-medium text-[#4A4A4A]">
        سنة الطبعة
      </label>
      <input
        type="text"
        id="yearOfEdition"
        name="yearOfEdition"
        value={formData.yearOfEdition}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-[#D8CAB8] rounded-md"
        required
      />
    </div>

    <div>
      <label htmlFor="pages" className="block text-sm font-medium text-[#4A4A4A]">
        عدد الصفحات
      </label>
      <input
        type="number"
        id="pages"
        name="pages"
        value={formData.pages}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-[#D8CAB8] rounded-md"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full py-2 px-4 bg-[#FFD700] text-[#1E3A8A] rounded-md hover:bg-[#FFB600] mt-4"
    >
      إضافة الكتاب
    </button>
  </form>
</div>

  );
};

export default AddBook;
