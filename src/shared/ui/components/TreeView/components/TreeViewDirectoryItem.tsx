import DirectoryOpenedIcon from "@/shared/ui/icons/DirectoryOpenedIcon";
import { TreeViewDirectoryItemProps } from "../TreeView.types";
import DirectoryClosedIcon from "@/shared/ui/icons/DirectoryClosedIcon";
import { useEffect, useMemo, useRef, useState } from "react";
import { Tooltip } from "@nextui-org/react";
import useTooltipState from "@/shared/hooks/useTooltipState";

function TreeViewDirectoryItem({
  title,
  items,
  isOpened,
}: TreeViewDirectoryItemProps) {
  const [open, setOpened] = useState<boolean>(!!isOpened);

  const titleRef = useRef<HTMLParagraphElement>(null);
  const [isTooltipDisabled] = useTooltipState(titleRef, false);

  useEffect(() => {
    if (isOpened && !open) {
      setOpened(isOpened);
    }
  }, [isOpened]);

  const icon = useMemo(
    () =>
      open ? (
        <DirectoryOpenedIcon className="min-h-5 min-w-5" />
      ) : (
        <DirectoryClosedIcon className="min-h-5 min-w-5" />
      ),
    [open]
  );

  const switchOpened = () => {
    setOpened((value) => !value);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div
        className="flex gap-x-1 cursor-pointer h-3 items-center w-full"
        onClick={switchOpened}
      >
        {icon}
        <Tooltip content={title} isDisabled={isTooltipDisabled} offset={-3}>
          <p ref={titleRef} className="pt-1 truncate">
            {title}
          </p>
        </Tooltip>
      </div>
      {open && items && (
        <div className="flex flex-col gap-y-4 pl-2 ml-2 border-l-1">
          {...items}
        </div>
      )}
    </div>
  );
}

export default TreeViewDirectoryItem;
