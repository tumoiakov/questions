import { useEditorState, useEditorMounted } from "@udecode/plate-common";

const Toolbar = () => {
  const editor = useEditorState(); // Returns the active editor (or a fallback editor)
  const isMounted = useEditorMounted(); // Returns false if no editor is mounted
  console.log(editor, isMounted);
};

export default Toolbar;
