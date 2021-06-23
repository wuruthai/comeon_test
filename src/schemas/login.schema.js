import * as yup from "yup";
import baseSchema from "./base.schema";

const loginSchema = yup.object().shape({
  username: baseSchema.name.label("Username"),
  password: baseSchema.name.label("Password"),
});

export default loginSchema;
