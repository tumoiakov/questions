import FileIcon from "@/shared/ui/icons/FileIcon";
import { TreeViewDocumentItemProps } from "../TreeView.types";

function TreeViewDocumentItem({
  itemId,
  title,
  onClick,
}: TreeViewDocumentItemProps) {
  return (
    <div
      className="flex gap-x-1 cursor-pointer h-3 items-center"
      onClick={() => onClick(itemId)}
    >
      <FileIcon className="h-5 w-5" />
      <p className="pt-1">{title}</p>
    </div>
  );
}

export default TreeViewDocumentItem;
