import '@/styles/globals.css'
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Lấy tất cả các nút trong navbar
    const buttons = document.querySelectorAll(".nav-btn");

    // Lặp qua từng nút và kiểm tra nếu nút đó là nút hiện tại, thêm lớp .active vào nó
    buttons.forEach((button) => {
      if (button.getAttribute("href") === router.pathname) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }, [router.pathname]);
  return <Component {...pageProps} />
}
