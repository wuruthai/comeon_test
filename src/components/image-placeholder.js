import React from "react";
import { Placeholder } from "semantic-ui-react";
import "styles/placeholder.css";

const ImagePlaceholder = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      <Placeholder className="image-placehoder">
        <Placeholder.Image />
      </Placeholder>
    </div>
  );
});

export default ImagePlaceholder;
