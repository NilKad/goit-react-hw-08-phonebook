import { Formik } from 'formik';
import * as SC from './FormStyles.module';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/authOperations';
// import { signUpUser } from '/API/API';
// import API

const initialValues = { email: '', password: '', RePassword: '' };

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    // dispatch(signUpUser())

    // resetForm();

    // console.log(action);
    // action.resetForm;
  };

  const schema = Yup.object().shape({
    youName: Yup.string().required(),
    email: Yup.string().email('Invalid email').required('Requared'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(16, 'Too Long!')
      .required('Requared'),
    RePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password mismatch')
      .required('Requared'),
  });

  const handleRegister = async data => {
    data.preventDefault();
    const { youName: name, email, password } = data.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    // console.log(name.value, email.value, password.value);
    console.log('dataOut: ', user);
    dispatch(signUpUser(user));
    // signUpUser(dataOut);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <SC.Forms autoComplete="off" onSubmit={handleRegister}>
        <SC.Label>
          You name
          <SC.Input type="text" name="youName" autoComplete="name" />
          <SC.ErrorMes name="youName" component="span" />
        </SC.Label>
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
        <SC.Label>
          Retry Password
          <SC.Input
            type="password"
            name="RePassword"
            autoComplete="current-password"
          />
          <SC.ErrorMes name="RePassword" component="span" />
        </SC.Label>
        <SC.Button type="submit">Register</SC.Button>
      </SC.Forms>
    </Formik>
  );
};
