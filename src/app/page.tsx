import Image from "next/image";
import Link from "next/link";
import CountdownClock from "@/components/Clock";
import "material-symbols";

const styles = {
  container:
    "w-screen h-screen flex flex-col items-center justify-center bg-[url('/banner.png')] bg-cover bg-center",
  company: "flex flex-col items-center",
  title:
    "text-4xl font-bold font-inter bg-gradient-to-r from-violet-700 to-rose-700 text-transparent bg-clip-text flex items-center",
  subtitle:
    "text-2xl font-bold font-inter bg-gradient-to-r from-violet-700 to-rose-700 text-transparent bg-clip-text flex items-center",
  link: "flex gap-4 flex items-center justify-center text-2xl font-light font-inter bg-gradient-to-r from-violet-700 to-rose-700 text-transparent bg-clip-text",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="flex flex-col gap-12 items-center ">
        <div className={styles.company}>
          <Image src="/logo.png" alt="HomeOut Logo" height={300} width={300} />
          <h1 className={styles.title}>HomeOut</h1>
        </div>
        <h1 className={styles.subtitle}>Coming Soon In</h1>
        <CountdownClock targetDate="2026-08-24T00:00:00" />
      </div>
    </div>
  );
}
