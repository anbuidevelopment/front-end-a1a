import React from 'react';
import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet title={title ? `${title} | A1A` : undefined} defaultTitle={'A1A System'}>
      <meta name={'description'} content={description}></meta>
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};
