import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/phonebookSlice';
import * as SC from './Filter.module';

export const Filter = ({ emptyContacts, ...anyProps }) => {
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
