import * as yup from "yup";

const baseSchema = {
  name: yup.string().trim().min(3).required(),
};

export default baseSchema;
