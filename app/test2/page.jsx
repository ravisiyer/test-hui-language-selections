"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSelections from "../components/LanguageSelections";

// const allTranslators = [
//   { id: 1, name: "Tr. Durward Reynolds" },
//   { id: 2, name: "Tr. Kenton Towne" },
//   { id: 3, name: "Tr. Therese Wunsch" },
//   { id: 4, name: "Tr. Benedict Kessler" },
//   { id: 5, name: "Tr. Katelyn Rohan" },
// ];

// const allCommentators = [
//   { id: 11, name: "Comm. Durward Reynolds" },
//   { id: 12, name: "Comm. Kenton Towne" },
//   { id: 13, name: "Comm. Therese Wunsch" },
//   { id: 14, name: "Comm. Benedict Kessler" },
//   { id: 15, name: "Comm. Katelyn Rohan" },
// ];

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
  const [selectedTranslators0, setSelectedTranslators0] = useState(
    allLanguageAuthors[0].allTranslators
  );
  const [selectedCommentators0, setSelectedCommentators0] = useState(
    allLanguageAuthors[0].allCommentators
  );
  const [language0Selected, setLanguage0Selected] = useState(true);

  const [selectedTranslators1, setSelectedTranslators1] = useState(
    allLanguageAuthors[1].allTranslators
  );
  const [selectedCommentators1, setSelectedCommentators1] = useState(
    allLanguageAuthors[1].allCommentators
  );
  const [language1Selected, setLanguage1Selected] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">Test LanguageSelections Component</h2>
      <p>Two LanguageSelections Components individually specified</p>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <LanguageSelections
          languageId={allLanguageAuthors[0].languageId}
          languageName={allLanguageAuthors[0].languageName}
          languageSelected={language0Selected}
          setLanguageSelected={setLanguage0Selected}
          allTranslators={allLanguageAuthors[0].allTranslators}
          selectedTranslators={selectedTranslators0}
          setSelectedTranslators={setSelectedTranslators0}
          allCommentators={allLanguageAuthors[0].allCommentators}
          selectedCommentators={selectedCommentators0}
          setSelectedCommentators={setSelectedCommentators0}
        />
        <hr className="border border-black w-60 my-2 lg:hidden" />
        <LanguageSelections
          languageId={allLanguageAuthors[1].languageId}
          languageName={allLanguageAuthors[1].languageName}
          languageSelected={language1Selected}
          setLanguageSelected={setLanguage1Selected}
          allTranslators={allLanguageAuthors[1].allTranslators}
          selectedTranslators={selectedTranslators1}
          setSelectedTranslators={setSelectedTranslators1}
          allCommentators={allLanguageAuthors[1].allCommentators}
          selectedCommentators={selectedCommentators1}
          setSelectedCommentators={setSelectedCommentators1}
        />
      </div>
      <div className="text-left ml-2 w-full">
        <p className="mt-4">
          Page component showing data from LanguageSelections components above
        </p>
        <p>
          {`Language: ${allLanguageAuthors[0].languageName} is ` +
            (language0Selected ? `selected` : `not selected`)}
        </p>
        {language0Selected && (
          <>
            <p>
              Selected Translators:{" "}
              {selectedTranslators0.map((author) => author.name).join(", ")}
            </p>
            <p>
              Selected Commentators:{" "}
              {selectedCommentators0.map((author) => author.name).join(", ")}
            </p>
          </>
        )}
        <p>
          {`Language: ${allLanguageAuthors[1].languageName} is ` +
            (language1Selected ? `selected` : `not selected`)}
        </p>
        {language1Selected && (
          <>
            <p>
              Selected Translators:{" "}
              {selectedTranslators1.map((author) => author.name).join(", ")}
            </p>
            <p>
              Selected Commentators:{" "}
              {selectedCommentators1.map((author) => author.name).join(", ")}
            </p>
          </>
        )}
      </div>
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </div>
  );
}
export default Page;
