import { cn } from "@nextui-org/react";
import { AddIconProps } from "./AddIcon.types";

function AddIcon({ className, onClick }: AddIconProps) {
  return (
    <div
      aria-label="Search icon"
      className={cn(className, "p-2 w-10 h-10")}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="fill-current"
      >
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
      </svg>
    </div>
  );
}

export default AddIcon;
