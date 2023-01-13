// import css from './Filter.module.css';
// import PropTypes from 'prop-types';
import { Field, Formik, Form } from 'formik';
// import * as SC from 'pages/FormStyles.module';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/phonebookSlice';
import * as SC from './Filter.module';

export const Filter = ({ emptyContacts, ...anyProps }) => {
  // const filter = useSelector(state => state.filterContact.filter);
  const dispatch = useDispatch();

  const initialValues = { filter: '' };

  const onInputFilterHandle = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <SC.FilterDiv>
      <Formik initialValues={initialValues}>
        <Form autoComplete="off">
          <SC.Input
            type="text"
            name="filter"
            emptycontacts={emptyContacts ? 'true' : 'false'}
            onInput={onInputFilterHandle}
            {...anyProps}
          />
        </Form>
      </Formik>
    </SC.FilterDiv>
  );
};

// Filter.propTypes = {
//   onInputHandle: PropTypes.func.isRequired,
//   filterValue: PropTypes.string.isRequired,
// };
