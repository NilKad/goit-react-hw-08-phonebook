import { Field, Form, Formik } from 'formik';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebookOperations';
import * as Yup from 'yup';
import * as SC from './ServiceZone.module';

const initialValues = { name: '', number: '' };

export const ServiceZone = () => {
  const [isAddedContact, setIsAddedContact] = useState(false);
  const contacts = useSelector(state => state.contacts.contactsList);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const schema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я]+(([ -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/, {
        message: 'Only text',
      })
      .required('Requared'),
    // .validate(),
    number: Yup.string()
      // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      // .matches(/^[a-zA-Zа-яА-Я]+(([ -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/, {
      .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
        // .matches(/+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, {
        message: 'Error, wrong fomat',
      })
      // .min(6, 'Too Short!')
      // .max(16, 'Too Long!')

      .required('Requared'),
  });

  const toggleIsAddedContact = e => {
    setIsAddedContact(!isAddedContact);
    e.target.blur();
  };

  const onHandleSubmit = (
    { id, name, number },
    { resetForm, ...otherAction }
  ) => {
    // e.target.blur();
    console.log('otherAction: ', otherAction);

    if (contacts.find(el => el.name === name)) {
      alert(`${name} is arledy is contacts`);
      return false;
    }
    enqueueSnackbar('Contact added success', { variant: 'success' });

    dispatch(addContact({ id, name, number }));
    resetForm();

    return true;
  };

  return (
    <SC.ServiceZoneDiv>
      <SC.ButtonAddHidden
        type="button"
        onClick={toggleIsAddedContact}
        isActive={isAddedContact ? 'true' : 'false'}
      >
        {isAddedContact ? 'Hide Add' : 'Add Contact'}
      </SC.ButtonAddHidden>
      {isAddedContact && (
        <Formik
          initialValues={initialValues}
          onSubmit={onHandleSubmit}
          validationSchema={schema}
        >
          <SC.FormAddContact>
            <SC.Label>
              <SC.LabelSpan>Full name</SC.LabelSpan>
              <SC.Input
                type="text"
                name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // required
              // label="first name"
              />
              <SC.ErrorMes name="name" component="span" />
            </SC.Label>
            <SC.Label>
              <SC.LabelSpan>Phone Number</SC.LabelSpan>
              <SC.Input
                type="tel"
                name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              />
              <SC.ErrorMes name="number" component="span" />
            </SC.Label>
            <SC.ButtonPlus type="submitt">+</SC.ButtonPlus>
          </SC.FormAddContact>
        </Formik>
      )}

      {/* <button type="button">Delete</button> */}
    </SC.ServiceZoneDiv>
  );
};
