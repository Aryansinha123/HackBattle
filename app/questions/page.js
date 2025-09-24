"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Coding Questions</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.map((q) => (
          <li
            key={q.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <Link href={`/questions/${q.id}`}>
              <div>
                <h2 className="font-semibold text-lg mb-2">{q.name}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  Tags: {q.tags.join(", ")}
                </p>
                <p className="text-sm text-gray-500">
                  Difficulty: {q.rating || "N/A"}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
