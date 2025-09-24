export async function GET() {
  try {
    const res = await fetch("https://codeforces.com/api/problemset.problems");
    const data = await res.json();

    if (data.status !== "OK") {
      return new Response(
        JSON.stringify({ error: "Failed to fetch questions" }),
        { status: 500 }
      );
    }

    // Pick first 20 questions for display
    const questions = data.result.problems.slice(0, 60).map((q, idx) => ({
      id: idx.toString(), // assign index as id
      name: q.name,
      tags: q.tags,
      rating: q.rating || null,
    }));

    return new Response(JSON.stringify(questions), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
