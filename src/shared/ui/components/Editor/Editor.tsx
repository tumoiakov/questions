import { useState } from "react";
import { EditorProps } from "./Editor.types";
import { Descendant, createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { EditorCommand, renderElement, renderLeaf } from "./Editor.utils";

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

function Editor(_: EditorProps) {
  const [editor] = useState(() => withReact(createEditor()));

  // Render the Slate context.
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        maxLength={40}
        className="max-w-[1000px] min-w-[1000px] p-4 bg-white shadow-xl rounded-md"
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case "`": {
              event.preventDefault();
              EditorCommand.toggleCodeBlock(editor);
              break;
            }
            case "b": {
              event.preventDefault();
              EditorCommand.toggleBoldMark(editor);
              break;
            }
            default:
              break;
          }
        }}
      />
    </Slate>
  );
}

export default Editor;
