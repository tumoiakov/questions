import MenuIcon from "@/shared/ui/icons/MenuIcon";
import { HeaderProps } from "./Header.types";
import { Button, cn } from "@nextui-org/react";
import { HeaderTexts } from "./Header.const";

function Header({ title, className, onMenuClick }: HeaderProps) {
  return (
    <header
      className={cn(className, "flex items-center h-14 p-2 w-full border-b")}
    >
      <Button
        isIconOnly
        aria-label={HeaderTexts.button}
        variant="light"
        onClick={onMenuClick}
      >
        <MenuIcon />
      </Button>

      <h1 className="block ml-6 text-3xl pt-2">{title}</h1>
    </header>
  );
}

export default Header;
