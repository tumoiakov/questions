import DirectoryOpenedIcon from "@/shared/ui/icons/DirectoryOpenedIcon";
import { TreeViewDirectoryItemProps } from "../TreeView.types";
import DirectoryClosedIcon from "@/shared/ui/icons/DirectoryClosedIcon";
import { useEffect, useMemo, useState } from "react";

function TreeViewDirectoryItem({
  title,
  items,
  isOpened,
}: TreeViewDirectoryItemProps) {
  const [open, setOpened] = useState<boolean>(!!isOpened);

  useEffect(() => {
    if (isOpened && !open) {
      setOpened(isOpened);
    }
  }, [isOpened]);

  const icon = useMemo(
    () =>
      open ? (
        <DirectoryOpenedIcon className="h-5 w-5" />
      ) : (
        <DirectoryClosedIcon className="h-5 w-5" />
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
        <p className="pt-1">{title}</p>
      </div>
      {open && items && (
        <div className="flex flex-col gap-y-4 pl-2 ml-2 border-l-1">{...items}</div>
      )}
    </div>
  );
}

export default TreeViewDirectoryItem;
