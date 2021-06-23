import React from "react";
import { Grid } from "semantic-ui-react";
import { Logo } from "components";

const PageLayout = ({ children }) => {
  return (
    <>
      <Grid centered>
        <Grid.Column width={9}>
          <Logo />
        </Grid.Column>
      </Grid>
      {children}
    </>
  );
};

export default PageLayout