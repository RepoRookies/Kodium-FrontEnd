import React, { useState } from 'react';
import MonacoEditor, { OnChange, OnMount } from '@monaco-editor/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Configure Monaco Environment to handle Web Workers correctly
(self as any).MonacoEnvironment = {
  getWorker(_: any, label: string) {
    if (label === 'json') {
      return new Worker(
        new URL('monaco-editor/esm/vs/language/json/json.worker', import.meta.url),
        { type: 'module' }
      );
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new Worker(new URL('monaco-editor/esm/vs/language/css/css.worker', import.meta.url), {
        type: 'module',
      });
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new Worker(
        new URL('monaco-editor/esm/vs/language/html/html.worker', import.meta.url),
        { type: 'module' }
      );
    }
    if (label === 'typescript' || label === 'javascript') {
      return new Worker(
        new URL('monaco-editor/esm/vs/language/typescript/ts.worker', import.meta.url),
        { type: 'module' }
      );
    }
    return new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker', import.meta.url), {
      type: 'module',
    });
  },
};

interface EditorProps {
  code: string;
  language: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const CodeEditor: React.FC<EditorProps> = ({ code, language, setCode, setLanguage }) => {
  const options = {
    minimap: { enabled: false },
  };

  const handleEditorChange: OnChange = (value) => {
    if (value) {
      setCode(value);
    }
  };

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    console.log('Editor mounted', editor);
  };

  return (
    <div className="p-4">
      <Select onValueChange={(value) => setLanguage(value)}>
        <SelectTrigger className="w-[180px] bg-primary/85 text-primary-foreground">
          <SelectValue placeholder={'C/C++'} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="bg-primary/80 text-secondary/80">
            <SelectItem value="cpp"> C/C++ </SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <MonacoEditor
        className="py-2 my-2 bg-primary/80 text-secondary/80 rounded-md"
        height="400px"
        language={language}
        theme="vs-dark"
        value={code}
        options={options}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};
export default CodeEditor;
