import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>Home Page</h1>
    
   <Link href="/productlist" >
   Go to Product List
   </Link>
   </div>
  );
}
