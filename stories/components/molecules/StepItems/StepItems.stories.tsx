import { Meta } from '@storybook/react';
import StepItems, {
  StepItemsProps,
} from '../../../../components/molecules/StepItems';

export default {
  title: 'Components/Molecules/StepItems',
  component: StepItems,
} as Meta;

const Template = (args: StepItemsProps) => <StepItems {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: '/icon/step1.svg',
  title: '1. Start',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
