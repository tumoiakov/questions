import { useMemo } from "react";
import { TreeViewProps } from "./TreeView.types";
import { createItemsTree } from "./TreeView.utils";

function TreeView({ items }: TreeViewProps) {
  const itemsViews = useMemo(
    () =>
      createItemsTree(items, (itemId: string) =>
        console.log(`clicked on ${itemId}`)
      ),
    []
  );
  return <div className="flex flex-col gap-y-1 p-1 w-full">{...itemsViews}</div>;
}

export default TreeView;
