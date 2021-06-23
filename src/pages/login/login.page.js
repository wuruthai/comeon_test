import React, { useMemo } from "react";
import { Button, Message, Icon, Grid, Form, Input } from "semantic-ui-react";
import { useFormik } from "formik";
import { loginSchema as validationSchema } from "schemas";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("formik", formik);
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  const hasError = useMemo(
    (key) => Object.keys(formik.errors).length > 0,
    [formik.errors]
  );

  return (
    <div className="main container">
      <div className="login">
        <Grid centered>
          <Form onSubmit={formik.handleSubmit} error={hasError}>
            <Form.Field
              control={Input}
              name="username"
              placeholder="Username"
              icon="user"
              value={formik.values.username}
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
          </Form>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPage;
