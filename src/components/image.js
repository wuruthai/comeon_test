import React from "react";
import { Image as SemanticImage } from "semantic-ui-react";
import { LazyImage } from "react-lazy-images";
import ImagePlaceholder from "./image-placeholder";

const Image = ({ children, ...rest }) => {
  return (
    <LazyImage
      {...rest}
      placeholder={({ imageProps, ref }) => <ImagePlaceholder ref={ref} />}
      actual={({ imageProps }) => (
        <SemanticImage {...imageProps}>{children}</SemanticImage>
      )}
    />
  );
};

export default Image;
