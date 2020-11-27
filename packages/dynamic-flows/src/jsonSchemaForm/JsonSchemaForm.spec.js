import React from 'react';
import { shallow } from 'enzyme';

import JsonSchemaForm from '.';

import GenericSchema from './genericSchema';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'en',
      changeLanguage: () => {},
    },
    t: (s) => s,
  }),
}));

describe('Given a component for rendering a JSON schema form', () => {
  let component;
  let genericSchema;
  let props;

  const numberSchema = {
    type: 'number',
    max: 2,
  };

  beforeEach(() => {
    const schema = {
      type: 'object',
      properties: {
        a: numberSchema,
      },
      required: ['a'],
    };
    const model = { a: 2 };
    const locale = 'en-GB';
    const onChange = jest.fn();
    const onPersistAsync = jest.fn();
    const submitted = false;
    const errors = { a: 'b' };
    const translations = {};

    props = {
      schema,
      model,
      onChange,
      submitted,
      locale,
      errors,
      translations,
      onPersistAsync,
    };
    component = shallow(<JsonSchemaForm {...props} />);

    genericSchema = component.find(GenericSchema);
  });

  describe('when initialised', () => {
    it('should render a generic schema component', () => {
      expect(genericSchema.prop('schema')).toEqual(props.schema);
    });

    it('should pass the generic schema the model', () => {
      expect(genericSchema.prop('model')).toEqual(props.model);
    });

    it('should pass the generic schema the errors', () => {
      expect(genericSchema.prop('errors')).toEqual(props.errors);
    });

    it('should pass the generic schema the translations', () => {
      expect(genericSchema.prop('translations')).toEqual(props.translations);
    });

    it('should pass the generic schema the locale', () => {
      expect(genericSchema.prop('locale')).toEqual(props.locale);
    });
  });

  describe('when the child generic schema triggers onChange', () => {
    beforeEach(() => {
      genericSchema.simulate('change', { a: 1 }, numberSchema);
    });

    it('should trigger the component onChange', () => {
      expect(props.onChange).toHaveBeenCalledWith({ a: 1 }, true, numberSchema);
    });
  });

  describe('when the child generic schema triggers with an invalid model', () => {
    beforeEach(() => {
      genericSchema.simulate('change', { b: 'invalid' }, numberSchema);
    });

    it('should trigger the component onChange, marking as invalid', () => {
      expect(props.onChange).toHaveBeenCalledWith({ b: 'invalid' }, false, numberSchema);
    });
  });
});
