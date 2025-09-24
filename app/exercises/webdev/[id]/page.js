"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function WebDevExerciseDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch("/api/webdev-questions")
      .then((res) => res.json())
      .then((data) => {
        const q = (data || []).find((it) => String(it.id) === String(id));
        setQuestion(q);
      });
  }, [id]);

  if (!question) return <div className="p-6">Loading...</div>;

  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">{question.name}</h1>
          <Link href="/exercises/webdev" className="text-sm underline">Back</Link>
        </div>
        <p className="text-slate-600 mb-2">Tags: {(question.tags || []).join(", ")}</p>
        <p className="text-slate-500 mb-6">Difficulty: {question.rating || "N/A"}</p>

        <div className="rounded-xl border border-cyan-200 bg-white p-4 shadow-sm">
          <h2 className="font-medium mb-2">Problem Statement</h2>
          <p className="text-sm text-slate-700 whitespace-pre-line">{question.description}</p>
          {Array.isArray(question.examples) && question.examples.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium mb-2">Example</h3>
              <pre className="bg-slate-50 border border-slate-200 rounded p-3 text-sm overflow-auto"><code>Input: {question.examples[0].input}\nOutput: {question.examples[0].output}</code></pre>
            </div>
          )}
        </div>

        <div className="mt-6 rounded-xl border border-cyan-200 bg-white p-4 shadow-sm">
          <h2 className="font-medium mb-2">Starter Code</h2>
          <MonacoEditor
            height="360px"
            defaultLanguage={question.language || "javascript"}
            defaultValue={question.starterCode || ""}
            theme="vs-dark"
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
        </div>
      </div>
    </div>
  );
}


