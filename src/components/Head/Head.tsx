import React from 'react';
import { Helmet } from 'react-helmet-async';
import * as process from 'process';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet title={title ? `T-DEV | ${title}` : undefined} defaultTitle={'A1A System'}>
      <meta name={'description'} content={description}></meta>
      <link rel="icon" href={process.env.PUBLIC_URL+ '/favicon.ico'} />
    </Helmet>
  );
};
