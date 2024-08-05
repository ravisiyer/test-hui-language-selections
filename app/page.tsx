import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h2>Test LanguageSelections Component</h2>
      <Link href="/test" className="underline block my-4">
        Test(1): Only One LanguageSelections Component
      </Link>
    </main>
  );
}
