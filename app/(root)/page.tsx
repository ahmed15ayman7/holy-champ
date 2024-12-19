"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getUserData } from "@/lib/actions/user.action";
import { User } from "@/interfaces";
import axios from "axios";

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
      dir="rtl" // Set the direction to RTL
    >
      {/* Spinner Container */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Circular Spinner with Gradient */}
        <div
          className="absolute border-8 border-transparent rounded-full w-full h-full animate-spin 
                        from-[#FFD700] via-[#FF8C00] to-[#FF6347] bg-gradient-to-r"
        ></div>

        {/* Logo Image (SVG) */}
        <img
          src="/images/الشعار فقط.svg" // Path to your logo SVG
          alt="Logo"
          className="w-16 h-16 z-10" // Keep the logo size fixed and ensure it's above the spinner
        />
      </div>
    </div>
  );
};

const pages = [
  { title: "صفحة التقارير القرائية", href: "/reading-reports" },
  { title: "إضافة كتاب جديد", href: "/add-book" },
  { title: "اداره", href: "/admin" },
  { title: "فليتنافس المتنافسون", href: "/competitions" },
  { title: "سموط المعارف", href: "/articles" },
];

const MainPage = () => {
  const [articles, setArticles] = useState<
    { id: string; title: string; content: string }[]
  >([]);
  const [user, setUser] = useState<User>();
  let getUser = async () => {
    let user = await getUserData();
    setUser(user);
  };
  useEffect(() => {
    const fetchPendingArticles = async () => {
      try {
        // Fetch pending articles for men
        const menResponse = await axios.get("/api/articles?status=approved");
        setArticles(menResponse.data);
      } catch (error) {
        console.error("Failed to fetch approved articles:", error);
      }
    };

    fetchPendingArticles();
    getUser();
  }, []);
  return (
    <div className="max-w-full p-6 bg-[#FAF3E0] rounded-lg shadow-xl" dir="rtl">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#1E3A8A] leading-tight">
          الصفحة الرئيسية
        </h1>
        <p className="mt-3 text-lg text-[#4A4A4A] max-w-2xl mx-auto">
          مرحبًا بك في الموقع! اختر وجهتك المفضلة من هنا.
        </p>
      </header>

      {/* Articles or Announcements Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-[#1E3A8A]">
          المقالات أو الإعلانات
        </h2>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#1E3A8A]">
                {article.title}
              </h3>
              <p className="text-sm text-[#4A4A4A] mt-3">{article.content}</p>
              <Link
                href={"/articles"}
                className="text-[#b6a43f] hover:underline mt-4 inline-block"
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
