import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Menggulir ke atas
  }, [pathname]); // Dipanggil setiap kali path berubah

  return null; // Komponen ini hanya digunakan untuk efek
};

export default ScrollToTop;
