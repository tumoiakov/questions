import { RenderElementProps } from "slate-react";

const CodeElement = (props: RenderElementProps) => {
  return (
    <pre className="my-2" {...props.attributes}>
      <code className="bg-foreground-200 rounded-md p-2">{props.children}</code>
    </pre>
  );
};

export default CodeElement;
