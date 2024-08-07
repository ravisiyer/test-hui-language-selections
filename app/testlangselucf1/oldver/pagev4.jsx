"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSelectionsUcF from "../components/LanguageSelectionsUcF";

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
  const languageCheckboxLSC_Name = "check";
  const translatorsListBoxLSC_Name = "Transl";
  const commentatorsListBoxLSC_Name = "Commnt";
  const languageChecked = [false, false, false];

  function handleSubmit(e) {
    e.preventDefault();
    let msg = "";
    const form = e.target;
    const formData = new FormData(form);
    allLanguageAuthors.map((languageAuthor, index) => {
      let countTranslatorKeys = 0;
      let countCommentatorKeys = 0;
      for (let key of formData.keys()) {
        key.startsWith(
          `${languageAuthor.languageId}${translatorsListBoxLSC_Name}[`
        )
          ? countTranslatorKeys++
          : key.startsWith(
              `${languageAuthor.languageId}${commentatorsListBoxLSC_Name}[`
            )
          ? countCommentatorKeys++
          : null;
      }
      let numTranslators = countTranslatorKeys
        ? Math.floor(countTranslatorKeys / 2)
        : 0;
      let numCommentators = countCommentatorKeys
        ? Math.floor(countCommentatorKeys / 2)
        : 0;

      msg +=
        `LanguageId: ${languageAuthor.languageId} checkbox is ` +
        (formData.has(`${languageAuthor.languageId}${languageCheckboxLSC_Name}`)
          ? "checked. "
          : "unchecked. ");
      msg += "\n";
      msg += `${numTranslators} translator(s) selected: `;
      for (let i = 0; i < numTranslators; i++) {
        let key = `${languageAuthor.languageId}${translatorsListBoxLSC_Name}[${i}][name]`;
        msg += formData.get(key) + ", ";
      }
      msg += "\n";
      msg += `${numCommentators} commentator(s) selected: `;
      for (let i = 0; i < numCommentators; i++) {
        let key = `${languageAuthor.languageId}${commentatorsListBoxLSC_Name}[${i}][name]`;
        msg += formData.get(key) + ", ";
      }
      msg += "\n---------\n";
    });
    setShowData(msg);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="">
        TestLangSelUcF1 Multiple LanguageSelectionsUcF Components
      </h2>
      <p>
        Dynamic number (3 usually) LanguageSelectionsUcF components; UcF =
        Uncontrolled (no state variables passed to LanguageSelectionsUcF) and
        used in Form
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {allLanguageAuthors.map((languageAuthor, index) => {
            return (
              <LanguageSelectionsUcF
                languageId={languageAuthor.languageId}
                languageName={languageAuthor.languageName}
                languageChecked={languageChecked[index]}
                languageCheckBoxName={`${languageAuthor.languageId}${languageCheckboxLSC_Name}`}
                allTranslators={languageAuthor.allTranslators}
                selectedTranslators={languageAuthor.allTranslators}
                translatorsListBoxName={`${languageAuthor.languageId}${translatorsListBoxLSC_Name}`}
                allCommentators={languageAuthor.allCommentators}
                selectedCommentators={languageAuthor.allCommentators}
                commentatorsListBoxName={`${languageAuthor.languageId}${commentatorsListBoxLSC_Name}`}
              />
            );
          })}
        </div>
        <button className="border border-black rounded-md px-2 my-2">
          List Selections
        </button>
      </form>
      <div className="text-left ml-2 w-full">
        <p className="mt-4">
          Page component showing data from LanguageSelectionsUcF components and
          each of its two AuthorListUcF children components above:
        </p>
        {showData.split("\n").map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
      <Link href="/" className="ml-4 underline">
        Home
      </Link>
    </div>
  );
}
export default Page;
