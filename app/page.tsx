import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h2>Test LanguageSelections Component</h2>
      <Link href="/test1" className="underline block my-4">
        Test1: Only One LanguageSelections Component
      </Link>
      <Link href="/test2" className="underline block my-4">
        Test2: Two LanguageSelections Components individually specified
      </Link>
    </main>
  );
}
