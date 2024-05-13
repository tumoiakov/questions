import { cn } from "@nextui-org/react";
import { MenuIconProps } from "./MenuIcon.types";

function MenuIcon({ className, onClick }: MenuIconProps) {
  return (
    <div
      aria-label="Menu icon"
      className={cn(className, "p-2 w-10 h-10")}
      onClick={onClick}
    >
      <svg
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
}

export default MenuIcon;
