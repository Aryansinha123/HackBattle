function decodeHtmlEntities(text) {
  if (!text) return "";
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const topic = (searchParams.get("topic") || "").toLowerCase();

    // Curated coding problems (JavaScript/Node/React), with statements and starter code
    const problems = [
      {
        id: "js-two-sum",
        name: "Two Sum (JS)",
        tags: ["web", "javascript"],
        rating: 3,
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        examples: [{ input: "nums=[2,7,11,15], target=9", output: "[0,1]" }],
        starterCode: "function twoSum(nums, target) {\n  // TODO: implement\n}\n\nmodule.exports = { twoSum };\n",
        functionName: "twoSum",
        language: "javascript",
      },
      {
        id: "js-valid-parentheses",
        name: "Valid Parentheses (JS)",
        tags: ["web", "javascript"],
        rating: 4,
        description: "Given a string s containing '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        examples: [{ input: "s=()[]{}", output: "true" }],
        starterCode: "function isValid(s) {\n  // TODO: implement\n}\n\nmodule.exports = { isValid };\n",
        functionName: "isValid",
        language: "javascript",
      },
      {
        id: "node-read-file",
        name: "Read File Lines (Node)",
        tags: ["web", "node"],
        rating: 3,
        description: "Write a Node.js function that reads a text file and returns the number of lines.",
        examples: [{ input: "path=sample.txt", output: "42" }],
        starterCode: "const fs = require('fs');\n\nfunction countLines(path) {\n  // TODO: implement using fs.readFileSync\n}\n\nmodule.exports = { countLines };\n",
        functionName: "countLines",
        language: "javascript",
      },
      {
        id: "react-unique-list",
        name: "Unique List (React)",
        tags: ["web", "react", "javascript"],
        rating: 2,
        description: "Implement a function that returns a unique array from a list with duplicates. (Use in a React component).",
        examples: [{ input: "[1,2,2,3,3,3]", output: "[1,2,3]" }],
        starterCode: "function unique(arr) {\n  // TODO: implement\n}\n\nmodule.exports = { unique };\n",
        functionName: "unique",
        language: "javascript",
      },
      {
        id: "nextjs-slugify",
        name: "Slugify (Next.js)",
        tags: ["web", "nextjs", "javascript"],
        rating: 3,
        description: "Write a function that converts a string title into a URL-friendly slug (lowercase, hyphen-separated, alphanumerics only).",
        examples: [{ input: "Hello, World!", output: "hello-world" }],
        starterCode: "function slugify(title) {\n  // TODO: implement\n}\n\nmodule.exports = { slugify };\n",
        functionName: "slugify",
        language: "javascript",
      },
    ];

    const list = topic
      ? problems.filter((q) => q.tags.some((t) => t.toLowerCase() === topic))
      : problems;

    return new Response(JSON.stringify(list), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


