"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSelections from "../components/LanguageSelections";

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

  let allSelectedLanguageAuthors = [];
  allSelectedLanguageAuthors[0] = {
    languageSelected: language0Selected,
    setLanguageSelected: setLanguage0Selected,
    selectedTranslators: selectedTranslators0,
    setSelectedTranslators: setSelectedTranslators0,
    selectedCommentators: selectedCommentators0,
    setSelectedCommentators: setSelectedCommentators0,
  };
  allSelectedLanguageAuthors[1] = {
    languageSelected: language1Selected,
    setLanguageSelected: setLanguage1Selected,
    selectedTranslators: selectedTranslators1,
    setSelectedTranslators: setSelectedTranslators1,
    selectedCommentators: selectedCommentators1,
    setSelectedCommentators: setSelectedCommentators1,
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">Test4 LanguageSelections Component</h2>
      <p>
        Two LanguageSelections Components loop implementation little more
        improvement but useState variables are still hardcoded
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {allSelectedLanguageAuthors.map((languageAuthor, index) => {
          return (
            <>
              <LanguageSelections
                languageId={allLanguageAuthors[index].languageId}
                languageName={allLanguageAuthors[index].languageName}
                languageSelected={languageAuthor.languageSelected}
                setLanguageSelected={languageAuthor.setLanguageSelected}
                allTranslators={allLanguageAuthors[index].allTranslators}
                selectedTranslators={languageAuthor.selectedTranslators}
                setSelectedTranslators={languageAuthor.setSelectedTranslators}
                allCommentators={allLanguageAuthors[index].allCommentators}
                selectedCommentators={languageAuthor.selectedCommentators}
                setSelectedCommentators={languageAuthor.setSelectedCommentators}
              />
              <hr className="border border-black w-60 my-2 lg:hidden" />
            </>
          );
        })}
      </div>
      <div className="text-left ml-2 w-full">
        <p className="mt-4">
          Page component showing data from LanguageSelections components above
        </p>
        {allSelectedLanguageAuthors.map((languageAuthor, index) => {
          return (
            <>
              <p>
                {`Language: ${allLanguageAuthors[index].languageName} is ` +
                  (languageAuthor.languageSelected
                    ? `selected`
                    : `not selected`)}
              </p>
              {languageAuthor.languageSelected && (
                <>
                  <p>
                    Selected Translators:{" "}
                    {languageAuthor.selectedTranslators
                      .map((author) => author.name)
                      .join(", ")}
                  </p>
                  <p>
                    Selected Commentators:{" "}
                    {languageAuthor.selectedCommentators
                      .map((author) => author.name)
                      .join(", ")}
                  </p>
                </>
              )}
            </>
          );
        })}
      </div>
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </div>
  );
}
export default Page;
