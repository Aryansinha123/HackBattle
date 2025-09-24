"use client";

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

export default function CodeEditor({ value, onChange, language = 'javascript', height = 360 }) {
  const options = useMemo(() => ({
    minimap: { enabled: false },
    fontSize: 14,
    scrollBeyondLastLine: false,
    automaticLayout: true,
  }), []);

  return (
    <div className="border rounded-md overflow-hidden">
      <MonacoEditor
        height={height}
        language={language}
        value={value}
        onChange={(val) => onChange?.(val ?? '')}
        theme="vs-dark"
        options={options}
      />
    </div>
  );
}



