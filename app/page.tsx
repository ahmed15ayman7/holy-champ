"use client";

import Link from "next/link";
import { useState } from "react";

const MainPage = () => {
  // Example content for the articles/announcements
  const articles = [
    {
      title: "مقالة عن التحدي القرائي",
      content: "هذه مقالة توضح كيفية الانخراط في التحدي القرائي وتقديم التقارير اليومية.",
      link: "/reading-reports",
    },
    {
      title: "التعريف بمبادرة غصن الزيتون",
      content: "غصن الزيتون هو مشروع تطوعي يهدف إلى تعزيز الثقافة القرائية بين الأفراد.",
      link: "/about",
    },
    // Add more articles as necessary
  ];

  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 bg-[#FAF3E0] rounded-lg shadow-xl">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#1E3A8A] leading-tight">
          الصفحة الرئيسية
        </h1>
        <p className="mt-3 text-lg text-[#4A4A4A] max-w-2xl mx-auto">
          مرحبًا بك في الموقع! اختر وجهتك المفضلة من هنا.
        </p>
      </header>

      {/* Links to Other Pages */}
      <section className="space-y-8 mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A]">الصفحات الأخرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/reading-reports"
            className="block text-center bg-[#1E3A8A] text-white py-4 px-8 rounded-lg shadow-md hover:bg-[#1A3163] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            صفحة التقارير القرائية
          </Link>
          <Link
            href="/add-book"
            className="block text-center bg-[#1E3A8A] text-white py-4 px-8 rounded-lg shadow-md hover:bg-[#1A3163] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            إضافة كتاب جديد
          </Link>
          <Link
            href="/admin"
            className="block text-center bg-[#1E3A8A] text-white py-4 px-8 rounded-lg shadow-md hover:bg-[#1A3163] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
           اداره
          </Link>
          {/* Add a link to the competitions page */}
          <Link
            href="/competitions"
            className="block text-center bg-[#1E3A8A] text-white py-4 px-8 rounded-lg shadow-md hover:bg-[#1A3163] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            فليتنافس المتنافسون
          </Link>
        </div>
      </section>

      {/* Articles or Announcements Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-[#1E3A8A]">المقالات أو الإعلانات</h2>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-[#1E3A8A]">{article.title}</h3>
              <p className="text-sm text-[#4A4A4A] mt-3">{article.content}</p>
              <Link
                href={article.link}
                className="text-[#FFD700] hover:underline mt-4 inline-block"
              >
                اقرأ المزيد
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
