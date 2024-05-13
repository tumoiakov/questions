import { menuItems } from "./MainMenu.const";
import TreeView from "@/shared/ui/components/TreeView";
import { MainMenuProps } from "./MainMenu.types";
import { Resizable } from "re-resizable";
import { Input } from "@nextui-org/react";
import SearchIcon from "@/shared/ui/icons/SearchIcon";

function MainMenu({ isOpen }: MainMenuProps) {
  return (
    isOpen && (
      <Resizable
        className="border-r p-2"
        defaultSize={{
          height: "auto",
          width: 250,
        }}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <Input
          className="p-2 pb-4 mb-4 border-b-1 w-full"
          endContent={<SearchIcon />}
					placeholder="Поиск"
        />
        <TreeView items={menuItems} />
      </Resizable>
    )
  );
}

export default MainMenu;
