import { Formik } from 'formik';
import * as SC from './FormStyles.module';
import * as Yup from 'yup';

const initialValues = { email: '', password: '' };

export const Login = () => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    resetForm();
    // console.log(action);
    // action.resetForm;
  };

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Requared'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Requared'),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <SC.Forms autoComplete="off">
        <SC.Label>
          Email
          <SC.Input type="text" name="email" autoComplete="username" />
          <SC.ErrorMes name="email" component="span" />
        </SC.Label>
        <SC.Label>
          Password
          <SC.Input
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <SC.ErrorMes name="password" component="span" />
        </SC.Label>
        <SC.Button type="submit">Login</SC.Button>
      </SC.Forms>
    </Formik>
  );
};
