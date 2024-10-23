import { render, screen } from '@testing-library/react';
import React from "react"
import '@testing-library/jest-dom';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../../../src/components/ui/form.tsx';

test('renders form field with label and description', () => {
  const { container } = render(
    <Form>
      <FormField name="testField">
        <FormItem>
          <FormLabel>Test Field</FormLabel>
          <FormControl as="input" />
          <FormDescription>This is a description for the test field.</FormDescription>
          <FormMessage>This is an error message.</FormMessage>
        </FormItem>
      </FormField>
    </Form>
  );

  expect(screen.getByLabelText(/Test Field/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a description for the test field/i)).toBeInTheDocument();
  expect(screen.getByText(/This is an error message/i)).toBeInTheDocument();
});
