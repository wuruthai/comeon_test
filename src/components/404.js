import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Header, Icon, Button } from "semantic-ui-react";

const EmptyPage = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <Container textAlign="center">
      <Icon name="ban" size="massive" />
      <Header as="h1" size="huge">
        404
      </Header>
      <Header as="h2" size="large">
        Oops! Looks like you got lost
      </Header>
      <Button
        color="green"
        labelPosition="left"
        icon="left chevron"
        content="Let me back!"
        onClick={goHome}
      />
    </Container>
  );
};

export default EmptyPage;
