import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Freeze, Plus, Whatsapp } from '@transferwise/icons';
import CircularButton from './CircularButton';

export default {
  component: CircularButton,
  title: 'CircularButton',
};

const icons = {
  plus: <Plus />,
  freeze: <Freeze />,
  whatsapp: <Whatsapp />,
};

export const basic = () => {
  const icon = select('icon', ['freeze', 'plus', 'whatsapp'], 'freeze');
  const priority = select('priority', Object.values(CircularButton.Priority));
  const type = select('type', Object.values(CircularButton.Type), CircularButton.Type.PRIMARY);
  const disabled = boolean('disabled', false);
  const label = text('label', 'Button text');
  return (
    <CircularButton
      icon={icons[icon]}
      priority={priority}
      type={type}
      disabled={disabled}
      onClick={action('Button Clicked')}
    >
      {label}
    </CircularButton>
  );
};
