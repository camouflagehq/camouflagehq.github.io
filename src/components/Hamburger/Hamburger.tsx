import React, { useEffect, useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';

export interface HamburgerProps {
  url?: string;
}

export function Hamburger({ url }: HamburgerProps) {
  const [tooltip, setTooltip] = useState(true);
  useEffect(() => {
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 3500);
  }, [url]);

  return (
    <Popup
      content={`You are now browsing ${url} in Camouflage.`}
      flowing
      inverted
      open={tooltip}
      position="right center"
      size="small"
      trigger={<Button className="hamburger" circular icon="bars" secondary />}
    />
  );
}
