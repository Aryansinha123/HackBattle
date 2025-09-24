"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => {
        const q = data.find((item) => item.id === id);
        setQuestion(q);
      });
  }, [id]);

  if (!question) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{question.name}</h1>
      <p className="text-gray-600 mb-2">Tags: {question.tags.join(", ")}</p>
      <p className="text-gray-500 mb-6">
        Difficulty: {question.rating || "N/A"}
      </p>

      <div className="border rounded-lg shadow p-4">
        <MonacoEditor
          height="400px"
          defaultLanguage="javascript"
          defaultValue="// Write your solution here"
          theme="vs-dark"
        />
      </div>
    </div>
  );
}
