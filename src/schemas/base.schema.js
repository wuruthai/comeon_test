import * as yup from "yup";

const baseSchema = {
  name: yup.string().trim().min(3).required(),
  password: yup.string().trim().min(1).required(),
};

export default baseSchema;
