import { RenderElementProps, RenderLeafProps } from "slate-react";
import { CodeElement, Leaf, DefaultElement } from "./components";
import { CustomEditor, CustomElement } from "./Editor.types";
import { Transforms, Editor as SlateEditor, Element } from "slate";

export const renderElement = (props: RenderElementProps) => {
  switch (props.element.type) {
    case "code":
      return <CodeElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};

export const renderLeaf = (props: RenderLeafProps) => {
  return <Leaf {...props} />;
};

export const EditorCommand = {
  isBoldActive(editor: CustomEditor) {
    const marks = SlateEditor.marks(editor);
    return marks && !!marks.bold;
  },
  isCodeBlockActive(editor: CustomEditor) {
    const [match] = SlateEditor.nodes(editor, {
      match: (n) => (n as CustomElement).type === "code",
    });
    return !!match;
  },
  toggleBoldMark(editor: CustomEditor) {
    const isActive = EditorCommand.isBoldActive(editor);
    if (isActive) {
      SlateEditor.removeMark(editor, "bold");
    } else {
      SlateEditor.addMark(editor, "bold", true);
    }
  },
  toggleCodeBlock(editor: CustomEditor) {
    const isActive = EditorCommand.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : "code" },
      { match: (n) => Element.isElement(n) && SlateEditor.isBlock(editor, n) }
    );
  },
};
