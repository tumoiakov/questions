import { ReactNode } from "react";
import { TreeViewItem } from "./TreeView.types";
import TreeViewDirectoryItem from "./components/TreeViewDirectoryItem";
import TreeViewDocumentItem from "./components/TreeViewDocumentItem";

export function createItemsTree(
  items: TreeViewItem[],
  onDocumentClick: (itemId: string) => void
): ReactNode[] {
  return items.map((item) => {
    if (item.isDirectory) {
      let innerItems: ReactNode[] = [];
      if (item.items && item.items.length > 0) {
        innerItems = createItemsTree(item.items, onDocumentClick);
      }
      return (
        <TreeViewDirectoryItem
          key={`${item.title}-${item.id}`}
          itemId={item.id}
          title={item.title}
          items={innerItems}
        />
      );
    }

    return (
      <TreeViewDocumentItem
        key={`${item.title}-${item.id}`}
        itemId={item.id}
        title={item.title}
        onClick={onDocumentClick}
      />
    );
  });
}
