import React, { useMemo, useState } from "react";
import { Button, Message, Icon, Grid, Form, Input } from "semantic-ui-react";
import { useFormik } from "formik";
import { loginSchema as validationSchema } from "schemas";
import { usePlayer } from "context/player.context";
import { useHistory } from "react-router-dom";
import { ROUTE_PATHS } from "constants/index";

const LoginPage = () => {
  const { login, loginLoading } = usePlayer();
  let history = useHistory();

  const [errorMessage, setErrorMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      login(values)
        .then(() => history.push(ROUTE_PATHS.GAMES))
        .catch((error) => {
          setErrorMessage(error?.response?.data?.error);
        });
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const hasError = useMemo(
    (key) => Object.keys(formik.errors).length > 0,
    [formik.errors]
  );

  const onChangeInput = (event, el) => {
    setErrorMessage("");
    formik.setErrors({});
    formik.handleChange(event, el);
  };

  return (
    <div className="login">
      <Grid centered>
        <Form
          onSubmit={formik.handleSubmit}
          error={hasError}
          warning={!!errorMessage}
          loading={loginLoading}
        >
          <Form.Field
            control={Input}
            name="username"
            placeholder="Username"
            icon="user"
            value={formik.values.username}
            onChange={onChangeInput}
          />
          <Form.Field>
            {formik.errors.username && (
              <Message error size="mini" content={formik.errors.username} />
            )}
          </Form.Field>
          <Form.Field
            control={Input}
            name="password"
            type="password"
            placeholder="Password"
            icon="lock"
            value={formik.values.password}
            onChange={onChangeInput}
          />
          <Form.Field>
            {formik.errors.password && (
              <Message error size="mini" content={formik.errors.password} />
            )}
          </Form.Field>
          <Form.Field control={Button} basic type="submit">
            Login
            <Icon name="right chevron" />
          </Form.Field>
          <Message warning>{errorMessage}</Message>
        </Form>
      </Grid>
    </div>
  );
};

export default LoginPage;
