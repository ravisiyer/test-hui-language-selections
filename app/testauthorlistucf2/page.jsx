"use client";
import Link from "next/link";
import { useState } from "react";
import AuthorListUcF from "../components/AuthorListUcF";

const allLanguageAuthors = [
  {
    languageId: 1,
    languageName: "English",
    allTranslators: [
      { id: 1, name: "Tr. Durward Reynolds" },
      { id: 2, name: "Tr. Kenton Towne" },
      { id: 3, name: "Tr. Therese Wunsch" },
      { id: 4, name: "Tr. Benedict Kessler" },
      { id: 5, name: "Tr. Katelyn Rohan" },
    ],
    allCommentators: [
      { id: 11, name: "Comm. Durward Reynolds" },
      { id: 12, name: "Comm. Kenton Towne" },
      { id: 13, name: "Comm. Therese Wunsch" },
      { id: 14, name: "Comm. Benedict Kessler" },
    ],
  },
  {
    languageId: 2,
    languageName: "Hindi",
    allTranslators: [
      { id: 21, name: "H Tr. Durward Reynolds" },
      { id: 22, name: "H Tr. Kenton Towne" },
      { id: 23, name: "H Tr. Therese Wunsch" },
    ],
    allCommentators: [
      { id: 31, name: "H Comm. Durward Reynolds" },
      { id: 32, name: "H Comm. Kenton Towne" },
      { id: 33, name: "H Comm. Therese Wunsch" },
      { id: 34, name: "H Comm. Benedict Kessler" },
      { id: 35, name: "H Comm. Katelyn Rohan" },
    ],
  },
];
function Page() {
  const [showData, setShowData] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let msg = "";
    const form = e.target;
    const formData = new FormData(form);
    let countTranslators = 0;
    let countCommentators = 0;
    for (let key of formData.keys()) {
      key.startsWith("lang0T")
        ? countTranslators++
        : key.startsWith("lang0C")
        ? countCommentators++
        : null;
      // count++;
    }
    let numTranslators = countTranslators
      ? Math.floor(countTranslators / 2)
      : 0;
    let numCommentators = countCommentators
      ? Math.floor(countCommentators / 2)
      : 0;
    msg += `${numTranslators} translator selected: `;
    for (let i = 0; i < numTranslators; i++) {
      let key = `lang0T[${i}][name]`;
      msg += formData.get(key) + ", ";
    }
    msg += `${numCommentators} commentator selected: `;
    for (let i = 0; i < numCommentators; i++) {
      let key = `lang0C[${i}][name]`;
      msg += formData.get(key) + ", ";
    }
    setShowData(msg);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">TestUcF2 2 AuthorListUcF Components</h2>
      <p>2 AuthorListUcF Uncontrolled components used in Form</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <AuthorListUcF
            authorsLabel="Translators"
            allAuthors={allLanguageAuthors[0].allTranslators}
            selectedAuthors={allLanguageAuthors[0].allTranslators}
            name="lang0T"
          />
          <AuthorListUcF
            authorsLabel="Commentators"
            allAuthors={allLanguageAuthors[0].allCommentators}
            selectedAuthors={allLanguageAuthors[0].allCommentators}
            name="lang0C"
          />
        </div>
        <button className="border border-black rounded-md px-2 my-2">
          List Selections
        </button>
      </form>
      <div className="text-left ml-2 w-full">
        <p className="mt-4">
          Page component showing data from 2 AuthorListUcF components above
        </p>
        <p>{showData}</p>
      </div>
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </div>
  );
}
export default Page;
