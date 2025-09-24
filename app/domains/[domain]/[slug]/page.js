"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import CodeEditor from '../../../../components/CodeEditor';
import DifficultyBadge from '../../../../components/DifficultyBadge';

function runUserCodeLocally(userCode, input) {
  try {
    const module = { exports: {} };
    // eslint-disable-next-line no-new-func
    const fn = new Function('module', 'exports', `${userCode}\nreturn module.exports;`);
    const exported = fn(module, module.exports);
    const solve = exported?.solve;
    if (typeof solve !== 'function') {
      return { error: 'No solve(input) function exported via module.exports.' };
    }
    const result = solve(String(input ?? ''));
    return { output: String(result) };
  } catch (err) {
    return { error: (err && err.message) ? err.message : 'Runtime error' };
  }
}

export default function ExerciseDetailPage({ params }) {
  const { domain, slug } = params;

  const [exercise, setExercise] = useState(null);
  const [code, setCode] = useState('');
  const [runOutput, setRunOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setError('');
      const res = await fetch(`/api/exercises/${domain}/${slug}`);
      if (!res.ok) {
        setError('Exercise not found');
        return;
      }
      const data = await res.json();
      if (!cancelled) {
        setExercise(data);
        setCode(data.starterCode || '');
      }
    }
    load();
    return () => { cancelled = true; };
  }, [domain, slug]);

  const samples = useMemo(() => exercise?.samples || [], [exercise]);

  const handleRunAllLocal = async () => {
    setIsRunning(true);
    try {
      const results = samples.map((s, idx) => {
        const r = runUserCodeLocally(code, s.input);
        if (r.error) return `#${idx + 1} Error: ${r.error}`;
        const ok = r.output.trim() === s.output.trim();
        return `#${idx + 1} ${ok ? 'Passed' : 'Failed'}\nExpected: ${s.output}\nGot: ${r.output}`;
      });
      setRunOutput(results.join('\n\n'));
    } finally {
      setIsRunning(false);
    }
  };

  const handleRunOnServer = async () => {
    setIsRunning(true);
    try {
      const results = [];
      for (let i = 0; i < samples.length; i++) {
        const resp = await fetch('/api/run', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ language: 'javascript', source: code, input: samples[i].input })
        });
        const data = await resp.json();
        const stdout = (data.stdout || '').toString();
        const stderr = (data.stderr || '').toString();
        const text = stderr ? `Error: ${stderr}` : stdout;
        const ok = (stdout || '').trim() === samples[i].output.trim();
        results.push(`#${i + 1} ${ok ? 'Passed' : 'Failed'}\nExpected: ${samples[i].output}\nGot: ${text}`);
      }
      setRunOutput(results.join('\n\n'));
    } finally {
      setIsRunning(false);
    }
  };

  if (error) {
    return (
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
        <h1 className="text-xl font-semibold">{error}</h1>
        <p className="mt-2"><Link className="underline" href={`/domains/${domain}`}>Back to exercises</Link></p>
      </main>
    );
  }

  if (!exercise) {
    return (
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold">{exercise.title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <DifficultyBadge level={exercise.difficulty} />
            <span className="text-sm opacity-70">{exercise.domainId}</span>
          </div>
          <p className="text-sm opacity-80 mt-2 max-w-2xl">{exercise.description}</p>
        </div>
        <div className="text-sm"><Link className="underline" href={`/domains/${domain}`}>Back to list</Link></div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="text-sm opacity-90 whitespace-pre-wrap">
            {exercise.description}
          </div>
          <div className="text-sm">
            {samples.map((s, i) => (
              <div key={i} className="mb-3">
                <div className="opacity-70">Sample #{i + 1}</div>
                <div className="grid grid-cols-2 gap-2 text-xs mt-1">
                  <div className="border rounded p-2">
                    <div className="font-medium mb-1">Input</div>
                    <pre className="whitespace-pre-wrap">{s.input}</pre>
                  </div>
                  <div className="border rounded p-2">
                    <div className="font-medium mb-1">Output</div>
                    <pre className="whitespace-pre-wrap">{s.output}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <CodeEditor value={code} onChange={setCode} language="javascript" height={420} />
          <div className="mt-3 flex items-center gap-2">
            <button onClick={handleRunAllLocal} disabled={isRunning} className="px-3 py-1.5 rounded bg-blue-600 text-white disabled:opacity-60">{isRunning ? 'Running...' : 'Run Samples (Local)'}</button>
            <button onClick={handleRunOnServer} disabled={isRunning} className="px-3 py-1.5 rounded bg-gray-700 text-white disabled:opacity-60">{isRunning ? 'Running...' : 'Run Samples (Server)'}</button>
          </div>
          <div className="mt-3 text-xs border rounded p-2 min-h-24 whitespace-pre-wrap">
            {runOutput || 'Run results will appear here.'}
          </div>
        </div>
      </div>
    </main>
  );
}



