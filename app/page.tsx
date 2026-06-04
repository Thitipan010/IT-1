import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <h3>ยินดีต้อนรับเข้าสู่เว็บ/</h3>
      <h3>นายฐิติพันธ์/</h3>

      <Footer/>
    </div>
  );
}
