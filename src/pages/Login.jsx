import { Formik } from 'formik';
import * as SC from './FormStyles.module';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authOperations';

const initialValues = { email: '', password: '' };

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value, { resetForm }) => {
    // const user = { email: value.email.value, password: value.password.value };
    // console.log('user: ', user);
    console.log('value: ', value);
    dispatch(loginUser(value));
    resetForm();
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
