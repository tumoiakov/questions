import FileIcon from "@/shared/ui/icons/FileIcon";
import { Tooltip } from "@nextui-org/tooltip";
import { TreeViewDocumentItemProps } from "../TreeView.types";
import { useRef } from "react";
import useTooltipState from "@/shared/hooks/useTooltipState";

function TreeViewDocumentItem({
  itemId,
  title,
  onClick,
}: TreeViewDocumentItemProps) {
  const titleRef = useRef<HTMLParagraphElement>(null);

  const [isTooltipDisabled] = useTooltipState(titleRef, false);

  return (
    <div
      className="flex gap-x-1 cursor-pointer h-3 items-center"
      onClick={() => onClick(itemId)}
    >
      <FileIcon className="min-h-5 min-w-5" />
      <Tooltip content={title} isDisabled={isTooltipDisabled} offset={-3}>
        <p ref={titleRef} className="truncate">
          {title}
        </p>
      </Tooltip>
    </div>
  );
}

export default TreeViewDocumentItem;
