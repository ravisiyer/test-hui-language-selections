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
      <Link href="/test3" className="underline block my-4">
        Test3: Two LanguageSelections Components attempted loop implementation
        partially successful
      </Link>
      <Link href="/test4" className="underline block my-4">
        Test4: Two LanguageSelections Components loop implementation little more
        improvement but useState variables are still hardcoded
      </Link>
      <Link href="/cctest1" className="underline block my-4">
        CCTest1: Using class components (instead of functional components) -
        very simple test
      </Link>
      <Link href="/cctest2" className="underline my-4">
        CCTest2: Adapted from: How to set state with a dynamic key name in
        ReactJS ?
      </Link>
      <a
        href="https://www.geeksforgeeks.org/how-to-set-state-with-a-dynamic-key-name-in-reactjs/"
        className="underline ml-4"
      >
        Article link
      </a>
    </main>
  );
}
