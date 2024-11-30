"use client";

import { useState } from "react";
import Link from "next/link";

const AdminPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    gender: "",
    province: "",
    area: "",
    whatsapp: "",
    instagram: "",
    previousSeason: "",
    readingChallenge: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission to add a new user (e.g., POST to API)
    console.log(userData);
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 bg-[#FAF3E0] rounded-lg shadow-xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#1E3A8A] leading-tight">
          صفحة الإدارة
        </h1>
        <p className="mt-3 text-lg text-[#4A4A4A] max-w-2xl mx-auto">
          إدارة بيانات المشتركين والمحتوى.
        </p>
      </header>

      {/* Add Subscriber Form */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">إضافة مشترك جديد</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="الاسم"
              value={userData.name}
              onChange={handleChange}
              className="p-4 rounded-lg border border-[#1E3A8A] w-full"
              required
            />
            <div className="flex gap-4">
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="رجل"
                    checked={userData.gender === "رجل"}
                    onChange={handleChange}
                  />{" "}
                  رجل
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="امرأة"
                    checked={userData.gender === "امرأة"}
                    onChange={handleChange}
                  />{" "}
                  امرأة
                </label>
              </div>
            </div>
            <input
              type="text"
              name="province"
              placeholder="المحافظة"
              value={userData.province}
              onChange={handleChange}
              className="p-4 rounded-lg border border-[#1E3A8A] w-full"
              required
            />
            <input
              type="text"
              name="area"
              placeholder="الولاية + المنطقة"
              value={userData.area}
              onChange={handleChange}
              className="p-4 rounded-lg border border-[#1E3A8A] w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="whatsapp"
              placeholder="رقم الواتساب"
              value={userData.whatsapp}
              onChange={handleChange}
              className="p-4 rounded-lg border border-[#1E3A8A] w-full"
              required
            />
            <input
              type="text"
              name="instagram"
              placeholder="حساب انستجرام"
              value={userData.instagram}
              onChange={handleChange}
              className="p-4 rounded-lg border border-[#1E3A8A] w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label>
                <input
                  type="radio"
                  name="previousSeason"
                  value="نعم"
                  checked={userData.previousSeason === "نعم"}
                  onChange={handleChange}
                />{" "}
                نعم
              </label>
              <label>
                <input
                  type="radio"
                  name="previousSeason"
                  value="لا"
                  checked={userData.previousSeason === "لا"}
                  onChange={handleChange}
                />{" "}
                لا
              </label>
            </div>
            <input
              type="number"
              name="readingChallenge"
              placeholder="التحدي القرائي (أرقام فقط)"
              value={userData.readingChallenge}
              onChange={handleChange}
              className="p-4 rounded-lg border border-[#1E3A8A] w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg hover:bg-[#1A3163] transition-all duration-300"
          >
            إضافة مشترك
          </button>
        </form>
      </section>

      {/* Task Management (Pause Counters, Reset Missed Pages) */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">إدارة المهام</h2>
        {/* Add functionality to pause counters and reset missed pages */}
        <button className="w-full bg-[#FF5733] text-white py-3 rounded-lg hover:bg-[#C0392B] transition-all duration-300">
          إيقاف العداد
        </button>
        <button className="w-full bg-[#FF5733] text-white py-3 rounded-lg hover:bg-[#C0392B] transition-all duration-300 mt-4">
          حذف الفوائت
        </button>
      </section>

      {/* Content Approval Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">موافقة على المقالات</h2>
        <button className="w-full bg-[#FFD700] text-[#1E3A8A] py-3 rounded-lg hover:bg-[#FFB600] transition-all duration-300">
          نشر المقالات
        </button>
      </section>

      {/* WhatsApp Group Messaging */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">رسائل المجموعة</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-[#1E3A8A]">مجموعة الرجال</h3>
            <textarea
              className="w-full p-4 rounded-lg border border-[#1E3A8A]"
              placeholder="أسماء الرجال مع الفوائت"
              rows={6}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1E3A8A]">مجموعة النساء</h3>
            <textarea
              className="w-full p-4 rounded-lg border border-[#1E3A8A]"
              placeholder="أسماء النساء مع الفوائت"
              rows={6}
            />
          </div>
        </div>
      </section>

      {/* Database Management */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">إدارة قاعدة البيانات</h2>
        <button className="w-full bg-[#FF5733] text-white py-3 rounded-lg hover:bg-[#C0392B] transition-all duration-300">
          حذف البيانات
        </button>
        <button className="w-full bg-[#28A745] text-white py-3 rounded-lg hover:bg-[#218838] transition-all duration-300 mt-4">
          تصدير البيانات
        </button>
      </section>

      {/* Editable Reports Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">تعديل التقارير القرائية</h2>
        <button className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg hover:bg-[#1A3163] transition-all duration-300">
          تعديل التقارير
        </button>
      </section>
    </div>
  );
};

export default AdminPage;
