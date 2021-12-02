import { Meta } from '@storybook/react';
import GameItems, {
  imageGameProps,
} from '../../../../components/molecules/GameItems';

export default {
  title: 'Components/Molecules/GameItems',
  component: GameItems,
} as Meta;

const Template = (args: imageGameProps) => <GameItems {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Super Mechs',
  platform: 'Mobile',
  imageGame: '/img/Thumbnail-1.png',
};
