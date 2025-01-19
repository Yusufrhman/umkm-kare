import Image from "next/image";
import NOTFOUNDIMG from "@/public/404.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full ">
      <section className="flex flex-col items-center justify-center h-[80svh] gap-4">
        <h1 className="font-bold text-2xl">Sorry, Page not Found!</h1>
        <Link href="/" className="py-2 px-4 bg-custom-light-olive-green text-white rounded-full">Go to Homepage</Link>
        <Image
          src={NOTFOUNDIMG}
          alt="404 - page not found"
          className="w-[90%] md:w-[70%] lg:w-[50%]"
        />
      </section>
    </main>
  );
}
