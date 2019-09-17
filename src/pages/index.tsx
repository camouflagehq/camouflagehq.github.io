import queryString from 'query-string';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Hamburger, Iframe } from '../components';

export interface IndexProps {
  location: any;
}

export default function Index({ location }: IndexProps) {
  const queryParams = queryString.parse(location.search);
  const url =
    queryParams.url &&
    (typeof queryParams.url === 'string'
      ? queryParams.url
      : queryParams.url[0]);

  return (
    <>
      <Hamburger url={url} />
      {url && <Iframe url={url} />}
    </>
  );
}
