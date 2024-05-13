import { useState } from "react";

function useSwitchState(defaultValue?: boolean): [boolean, () => void] {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(defaultValue || true);

  function switchState(): void {
    setMenuOpen((value) => !value);
  }

  return [isMenuOpen, switchState];
}

export default useSwitchState;
