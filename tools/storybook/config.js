import { configure } from '@storybook/angular';

configure(require.context('../../libs', true, /\.stories\.[tj]s$/), module);