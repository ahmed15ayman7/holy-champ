"use client";

import { useEffect, useState } from "react";

import AuthRegister from "@/app/(auth)/auth/AuthRegister";
import axios from "axios";
import { getUserData } from "@/lib/actions/user.action";
import { User } from "@/interfaces";
import { toast } from "react-toastify";
import UsersList from "@/components/shared/UserTable";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
const AdminPage = () => {
  const [userData, setUserData] = useState<User>();
  const [doneArticlesMen, setDoneArticlesMen] = useState([]);
  const [doneArticlesWomen, setDoneArticlesWomen] = useState([]);
  const [pendingArticlesMen, setPendingArticlesMen] = useState([]);
  const [pendingArticlesWomen, setPendingArticlesWomen] = useState([]);
  const [open, setOpen] = useState(false);
  const [isFe, setIsFe] = useState(0);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let getUser = async () => {
    let user = await getUserData();
    setUserData(user);
  };
  const handleApproval = async (
    articleId: string,
    status: "approved" | "rejected"
  ) => {
    try {
      await axios.put(`/api/articles`, { id: articleId, status });
      toast.success(
        `تم ${status === "approved" ? "الموافقة على" : "رفض"} المقال بنجاح.`
      );
      // تحديث البيانات بعد العملية
      const updatedMen = pendingArticlesMen.filter(
        (article: any) => article.id !== articleId
      );
      const updatedWomen = pendingArticlesWomen.filter(
        (article: any) => article.id !== articleId
      );
      setPendingArticlesMen(updatedMen);
      setPendingArticlesWomen(updatedWomen);
    } catch (error) {
      toast.error("حدث خطأ أثناء تحديث المقال:" + error);
    }
  };

  const handleDelete = async (articleId: string) => {
    try {
      await axios.delete(`/api/articles?id=${articleId}`);
      toast.success("تم حذف المقال بنجاح.");
      // تحديث البيانات بعد الحذف
      const updatedMen = pendingArticlesMen.filter(
        (article: any) => article.id !== articleId
      );
      const updatedWomen = pendingArticlesWomen.filter(
        (article: any) => article.id !== articleId
      );
      setPendingArticlesMen(updatedMen);
      setPendingArticlesWomen(updatedWomen);
      const updatedMend = doneArticlesMen.filter(
        (article: any) => article.id !== articleId
      );
      const updatedWomend = doneArticlesWomen.filter(
        (article: any) => article.id !== articleId
      );
      setPendingArticlesMen(updatedMend);
      setPendingArticlesWomen(updatedWomend);
    } catch (error) {
      toast.error("حدث خطأ أثناء حذف المقال:" + error);
      console.error("حدث خطأ أثناء حذف المقال:", error);
    }
  };

  useEffect(() => {
    const fetchPendingArticles = async () => {
      try {
        // Fetch pending articles for men
        const menResponse = await axios.get(
          "/api/articles?status=pending&gender=male"
        );
        setPendingArticlesMen(menResponse.data);
        // Fetch pending articles for women
        const womenResponse = await axios.get(
          "/api/articles?status=pending&gender=female"
        );
        setPendingArticlesWomen(womenResponse.data);
        const menResponsed = await axios.get(
          "/api/articles?status=approved&gender=male"
        );
        setDoneArticlesMen(menResponsed.data);

        const womenResponsed = await axios.get(
          "/api/articles?status=approved&gender=female"
        );
        setDoneArticlesWomen(womenResponsed.data);
      } catch (error) {
        console.error("Failed to fetch pending articles:", error);
      }
    };

    fetchPendingArticles();
    getUser();
  }, [isFe]);

  return (
    <div className="max-w-full p-6 bg-[#FAF3E0] rounded-lg shadow-xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#1E3A8A] leading-tight">
          صفحة الإدارة
        </h1>
        <p className="mt-3 text-lg text-[#4A4A4A] max-w-2xl mx-auto">
          إدارة بيانات المشتركين والمحتوى.
        </p>
      </header>
      <UsersList />
      <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          إضافة مشترك جديد
        </Button>

        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>
            <h2 className="text-2xl font-semibold text-[#1E3A8A]">
              إضافة مشترك جديد
            </h2>
          </DialogTitle>

          <DialogContent>
            <AuthRegister isManage setIsFe={setIsFe} />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              إلغاء
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* Task Management (Pause Counters, Reset Missed Pages) */}
      {/* Add functionality to pause counters and reset missed pages */}
      {/* <section className="my-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
          إدارة المهام
        </h2>
        <button className="w-full bg-[#FF5733] text-white py-3 rounded-lg hover:bg-[#C0392B] transition-all duration-300">
          إيقاف العداد
        </button>
        <button className="w-full bg-[#FF5733] text-white py-3 rounded-lg hover:bg-[#C0392B] transition-all duration-300 mt-4">
          حذف الفوائت
        </button>
      </section> */}

      {/* Content Approval Section */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
          موافقة على المقالات
        </h2>
        <button className="w-full bg-[#FFD700] text-[#1E3A8A] py-3 rounded-lg hover:bg-[#FFB600] transition-all duration-300">
          نشر المقالات
        </button>
      </section> */}

      {/* WhatsApp Group Messaging */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
          رسائل المجموعة
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-[#1E3A8A]">
              مجموعة الرجال
            </h3>
            <textarea
              className="w-full p-4 rounded-lg border border-[#1E3A8A]"
              placeholder="أسماء الرجال مع الفوائت"
              rows={6}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1E3A8A]">
              مجموعة النساء
            </h3>
            <textarea
              className="w-full p-4 rounded-lg border border-[#1E3A8A]"
              placeholder="أسماء النساء مع الفوائت"
              rows={6}
            />
          </div>
        </div>
      </section> */}
      {/* Pending Articles */}
      {/* Pending Articles */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] my-6">
          المقالات المعلقة
        </h2>
        <div className="space-y-8">
          {/* Men's Pending Articles */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E3A8A]">مقالات الرجال</h3>
            {pendingArticlesMen.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {pendingArticlesMen.map((article: any) => (
                  <li
                    key={article.id}
                    className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-xl font-bold">{article.title}</h4>
                      <p className="text-sm text-gray-600">{article.summary}</p>
                    </div>
                    <div className="flex gap-4">
                      <button
                        className="bg-[#28A745] text-white py-2 px-4 rounded hover:bg-[#218838]"
                        onClick={() => handleApproval(article.id, "approved")}
                      >
                        موافقة
                      </button>
                      {/* <button
                        className="bg-[#FF5733] text-white py-2 px-4 rounded hover:bg-[#C0392B]"
                        onClick={() => handleApproval(article.id, "rejected")}
                      >
                        رفض
                      </button> */}
                      <button
                        className="bg-[#FF0000] text-white py-2 px-4 rounded hover:bg-[#CC0000]"
                        onClick={() => handleDelete(article.id)}
                      >
                        حذف
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-600">لا توجد مقالات معلقة للرجال.</p>
            )}
          </div>

          {/* Women's Pending Articles */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E3A8A]">مقالات النساء</h3>
            {pendingArticlesWomen.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {pendingArticlesWomen.map((article: any) => (
                  <li
                    key={article.id}
                    className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-xl font-bold">{article.title}</h4>
                      <p className="text-sm text-gray-600">{article.summary}</p>
                    </div>
                    <div className="flex gap-4">
                      <button
                        className="bg-[#28A745] text-white py-2 px-4 rounded hover:bg-[#218838]"
                        onClick={() => handleApproval(article.id, "approved")}
                      >
                        موافقة
                      </button>
                      {/* <button
                        className="bg-[#FF5733] text-white py-2 px-4 rounded hover:bg-[#C0392B]"
                        onClick={() => handleApproval(article.id, "rejected")}
                      >
                        رفض
                      </button> */}
                      <button
                        className="bg-[#FF0000] text-white py-2 px-4 rounded hover:bg-[#CC0000]"
                        onClick={() => handleDelete(article.id)}
                      >
                        حذف
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-600">لا توجد مقالات معلقة للنساء.</p>
            )}
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] my-6">المقالات</h2>
        <div className="space-y-8">
          {/* Men's done Articles */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E3A8A]">مقالات الرجال</h3>
            {doneArticlesMen.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {doneArticlesMen.map((article: any) => (
                  <li
                    key={article.id}
                    className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-xl font-bold">{article.title}</h4>
                      <p className="text-sm text-gray-600">{article.summary}</p>
                    </div>
                    <div className="flex gap-4">
                      {/* <button
                        className="bg-[#FF5733] text-white py-2 px-4 rounded hover:bg-[#C0392B]"
                        onClick={() => handleApproval(article.id, "rejected")}
                      >
                        رفض
                      </button> */}
                      <button
                        className="bg-[#FF0000] text-white py-2 px-4 rounded hover:bg-[#CC0000]"
                        onClick={() => handleDelete(article.id)}
                      >
                        حذف
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-600">لا توجد مقالات للرجال.</p>
            )}
          </div>

          {/* Women's done Articles */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E3A8A]">مقالات النساء</h3>
            {doneArticlesWomen.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {doneArticlesWomen.map((article: any) => (
                  <li
                    key={article.id}
                    className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                  >
                    <div>
                      <h4 className="text-xl font-bold">{article.title}</h4>
                      <p className="text-sm text-gray-600">{article.summary}</p>
                    </div>
                    <div className="flex gap-4">
                      {/* <button
                        className="bg-[#FF5733] text-white py-2 px-4 rounded hover:bg-[#C0392B]"
                        onClick={() => handleApproval(article.id, "rejected")}
                      >
                        رفض
                      </button> */}
                      <button
                        className="bg-[#FF0000] text-white py-2 px-4 rounded hover:bg-[#CC0000]"
                        onClick={() => handleDelete(article.id)}
                      >
                        حذف
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-600">لا توجد مقالات للنساء.</p>
            )}
          </div>
        </div>
      </section>

      {/* Database Management */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
          إدارة قاعدة البيانات
        </h2>
        <button className="w-full bg-[#FF5733] text-white py-3 rounded-lg hover:bg-[#C0392B] transition-all duration-300">
          حذف البيانات
        </button>
        <button className="w-full bg-[#28A745] text-white py-3 rounded-lg hover:bg-[#218838] transition-all duration-300 mt-4">
          تصدير البيانات
        </button>
      </section> */}

      {/* Editable Reports Section */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-6">
          تعديل التقارير القرائية
        </h2>
        <button className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg hover:bg-[#1A3163] transition-all duration-300">
          تعديل التقارير
        </button>
      </section> */}
    </div>
  );
};

export default AdminPage;
