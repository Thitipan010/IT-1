import Image from "next/image";
import BlogsCard from "@/components/BlogCard";

export default function Home() {
  return (
    <div>
        <h2>ยินดีต้อนรับเข้าสู่  ของผมครับ</h2>
        <p>โดย นายฐิติพันธ์ รักษ์แสงสว่าง </p>
        
        <BlogsCard/>
    </div>
  );
}