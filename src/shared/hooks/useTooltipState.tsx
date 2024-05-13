import { RefObject, useEffect, useState } from "react";

function useTooltipState(
  anchorRef: RefObject<HTMLElement>,
  defaultValue?: boolean
): [boolean] {
  const [isTooltipDisabled, setTooltipDisabled] = useState<boolean>(
    defaultValue || false
  );

  useEffect(() => {
    function checkResizable() {
      if (anchorRef?.current) {
        const offsetWidth = anchorRef?.current.offsetWidth;
        const scrollWidth = anchorRef?.current.scrollWidth;

        if (offsetWidth < scrollWidth) {
          setTooltipDisabled(false);
          return;
        }
      }

      setTooltipDisabled(true);
    }

    checkResizable();

    const newObserver = new ResizeObserver(() => checkResizable());

    if (anchorRef?.current) {
      newObserver.observe(anchorRef.current);
    }

    return () => {
      newObserver.disconnect();
    };
  }, [anchorRef?.current]);

  return [isTooltipDisabled];
}

export default useTooltipState;
