import React from 'react';
import { Loader as SemanticLoader } from 'semantic-ui-react';

// Exporting for testing purposes
export const Loader = () => (
  <SemanticLoader
    active
    inline="centered"
    size="massive"
  >
    Loading
  </SemanticLoader>
);

export default React.memo(Loader);