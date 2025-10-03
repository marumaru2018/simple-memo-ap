import { useState, type JSX } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Editor from "./components/Editor";
import type { Memo } from "./types";

const initialMemo: Memo = {
  id: Date.now(),
  text: "hogehoge",
  timestamp: new Date().toLocaleString("ja-JP"),
};

function App(): JSX.Element {
  const [memos, setMemos] = useState<Memo[]>([initialMemo]);

  const addMemo = (inputText: string) => {
    console.log("addMemo");

    const newMemo: Memo = {
      id: Date.now(),
      text: inputText,
      timestamp: new Date().toLocaleString("ja-JP"),
    };
    setMemos([newMemo, ...memos]);
  };

  return (
    <>
      <div>
        <Layout>
          hello
          <div className="w-3/4 flex-col space-y-4">
            <Editor
              placeholder="新しいメモを入力.."
              type="shadow"
              onSubmit={addMemo}
            />
          </div>
          {memos.map((memo) => (
            <div>{memo.text}</div>
          ))}
        </Layout>
      </div>
    </>
  );
}

export default App;
