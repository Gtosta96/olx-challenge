import React from 'react';

import { Loader as SemanticLoader } from 'semantic-ui-react';

const Loader = () => (
<SemanticLoader
  active
  inline="centered"
  size="massive"
>
  Loading
</SemanticLoader>
)

// export default React.memo(Loader);
export default Loader;