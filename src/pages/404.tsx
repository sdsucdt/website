import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = (): JSX.Element => {
  return (
    <main>
      <title>404: This page could not be found</title>
      <div className="flex h-screen">
        <div className="m-auto">
          <h1 className="pb-10 text-5xl">404: Page not found</h1>
          <Link to="/">Click here to go back</Link>.
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
