import React from 'react';

export interface IframeProps {
  url: string;
}

export function Iframe({ url }: IframeProps) {
  return <iframe src={url} title={url}></iframe>;
}
