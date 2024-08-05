"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSelections from "../components/LanguageSelections";

const allTranslators = [
  { id: 1, name: "Tr. Durward Reynolds" },
  { id: 2, name: "Tr. Kenton Towne" },
  { id: 3, name: "Tr. Therese Wunsch" },
  { id: 4, name: "Tr. Benedict Kessler" },
  { id: 5, name: "Tr. Katelyn Rohan" },
];

const allCommentators = [
  { id: 11, name: "Comm. Durward Reynolds" },
  { id: 12, name: "Comm. Kenton Towne" },
  { id: 13, name: "Comm. Therese Wunsch" },
  { id: 14, name: "Comm. Benedict Kessler" },
  { id: 15, name: "Comm. Katelyn Rohan" },
];

function Page() {
  const [selectedTranslators, setSelectedTranslators] =
    useState(allTranslators);
  const [selectedCommentators, setSelectedCommentators] =
    useState(allCommentators);
  const [languageSelected, setLanguageSelected] = useState(false);
  const languageId = "1";
  const languageName = "English";
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">Test LanguageSelections Component</h2>
      <p>Only One LanguageSelections Component</p>
      <LanguageSelections
        languageId={languageId}
        languageName={languageName}
        languageSelected={languageSelected}
        setLanguageSelected={setLanguageSelected}
        allTranslators={allTranslators}
        selectedTranslators={selectedTranslators}
        setSelectedTranslators={setSelectedTranslators}
        allCommentators={allCommentators}
        selectedCommentators={selectedCommentators}
        setSelectedCommentators={setSelectedCommentators}
      />
      <p className="mt-4">
        Page component showing data from LanguageSelections component above
      </p>
      <p>
        {`Language: ${languageName} is ` +
          (languageSelected ? `selected` : `not selected`)}
      </p>
      {languageSelected && (
        <>
          <p>Selected Translators</p>
          {selectedTranslators.map((author) => author.name).join(", ")}
          <p>Selected Commentators</p>
          {selectedCommentators.map((author) => author.name).join(", ")}
        </>
      )}
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </div>
  );
}
export default Page;
