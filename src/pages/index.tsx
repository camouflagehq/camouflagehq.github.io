import queryString from 'query-string';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Hamburger, Iframe } from '../components';

export interface IndexProps {
  location: any;
}

export default function Index({ location }: IndexProps) {
  const queryParams = queryString.parse(location.search);

  return (
    <>
      <Hamburger />
      {queryParams.url && (
        <Iframe
          url={
            typeof queryParams.url === 'string'
              ? queryParams.url
              : queryParams.url[0]
          }
        />
      )}
    </>
  );
}
