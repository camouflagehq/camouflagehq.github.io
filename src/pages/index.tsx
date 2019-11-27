import queryString from 'query-string';
import React from 'react';

import { Hamburger, Iframe } from '../components';

export interface IndexProps {
  location: Location;
}

export default function Index({ location }: IndexProps): React.ReactElement {
  const queryParams = queryString.parse(location.search);
  const url = queryParams.url
    ? typeof queryParams.url === 'string'
      ? queryParams.url
      : queryParams.url[0]
    : undefined;

  return (
    <>
      <Hamburger url={url} />
      {url && <Iframe url={url} />}
    </>
  );
}
