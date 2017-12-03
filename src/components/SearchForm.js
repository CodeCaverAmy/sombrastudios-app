import React from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

const SearchForm = () => (
  <Form inline>
    <FormGroup controlId="formInLineEmail">
      <FormControl type="search" placeholder="enter something..." />
    </FormGroup>
    {' '}
    <Button type="submit">
      search
    </Button>
  </Form>
);

export default SearchForm;
