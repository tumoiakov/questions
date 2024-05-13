import { menuItems } from "./MainMenu.const";
import TreeView from "@/shared/ui/components/TreeView";
import { MainMenuProps } from "./MainMenu.types";

function MainMenu({ isOpen }: MainMenuProps) {
  return (
    isOpen && (
      <section className="border-r p-2 min-w-[250px]">
        <TreeView items={menuItems} />
      </section>
    )
  );
}

export default MainMenu;
