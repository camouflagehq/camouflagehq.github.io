import React from 'react';

export interface IframeProps {
  url: string;
}

export function Iframe({ url }: IframeProps): React.ReactElement {
  return (
    <iframe className="border-none fixed h-full w-full" src={url} title={url} />
  );
}
