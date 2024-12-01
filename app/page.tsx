"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; 
import { auth, currentUser } from '@clerk/nextjs/server'

// export default async function Page() {
//   // Get the userId from auth() -- if null, the user is not signed in
//   const { userId } = await auth()

//   if (userId) {
//     // Query DB for user specific information or display assets only to signed in users
//   }

//   // Get the Backend API User object when you need access to the user's information
//   const user = await currentUser()
//   // Use `user` to render user details or create UI elements
// }
const LandingPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    // Set the page to switch after 3 seconds
    const timer = setTimeout(() => {
      setShowMainPage(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (showMainPage) {
    return <MainPage />;
  }

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      // style={{
      //   backgroundImage: "url('/images/back.svg')", // Path to your background SVG
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      dir="rtl"  // Set the direction to RTL
    >
      {/* Spinner Container */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Circular Spinner with Gradient */}
        <div className="absolute border-8 border-transparent rounded-full w-full h-full animate-spin 
                        from-[#FFD700] via-[#FF8C00] to-[#FF6347] bg-gradient-to-r">
        </div>

        {/* Logo Image (SVG) */}
        <img
          src="/images/الشعار فقط.svg"  // Path to your logo SVG
          alt="Logo"
          className="w-16 h-16 z-10" // Keep the logo size fixed and ensure it's above the spinner
        />
      </div>
    </div>
  );
};

const MainPage = () => {
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
  ];

  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 bg-[#FAF3E0] rounded-lg shadow-xl" dir="rtl">
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

export default LandingPage;
