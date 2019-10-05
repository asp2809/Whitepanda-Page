import React from "react";

import NavigationWrapper from "../NavigationWrapper/NavigationWrapper";

export default ComposedComponent => {
  const BindNavs = props => {
    return (
      <NavigationWrapper {...props}>
        <ComposedComponent {...props} />
      </NavigationWrapper>
    );
  };

  return BindNavs;
};
