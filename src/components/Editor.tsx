import { Send } from "lucide-react";
import { useState } from "react";

type EditorProps = {
  initialValue?: string;
  placeholder?: string;
  type?: "shadow" | "border";
  onSubmit: (inputText: string) => void;
};

const Editor = (props: EditorProps) => {
  const { initialValue = "", placeholder = "", type = "" } = props;
  const [inputText, setinputText] = useState(initialValue);
  return (
    // 暫定: コンポーネント全体に薄い黄色の背景を設定
    <div className="bg-yellow-50 p-4 rounded-lg">
      Editor
      <textarea
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        placeholder={placeholder}
        className={
          type === "border"
            ? "bg-white w-full rounded-lg p-2 border border-gray-300"
            : "bg-white w-full rounded-lg p-4 shadow-lg"
        }
        rows={type === "border" ? 3 : 4}
      />
      <button
        onClick={() => {
          props.onSubmit(inputText);
          setinputText("");
        }}
        className="px-8 py-3 bg-emerald-600 text-sm text-white rounded-lg hover:bg-emerald-700"
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Editor;
