import { configure, addParameters } from '@storybook/angular';

const newViewports  = {
    xs: {
        name: 'xs',
        styles: {
            width: '375px',
            height: '100%',
        }
    },
    sm: {
        name: 'sm',
        styles: {
            width: '640px',
            height: '100%',
        }
    },
    md: {
        name: 'md',
        styles: {
            width: '768px',
            height: '100%',
        }
    },
    lg: {
        name: 'lg',
        styles: {
            width: '1024px',
            height: '100%',
        }
    },
    xl: {
        name: 'xl',
        styles: {
            width: '1280px',
            height: '100%',
        }
    },
};

addParameters({
    viewport: {
      viewports: {
        ...newViewports,
      },
    },
  });

configure(require.context('../../libs', true, /\.stories\.[tj]s$/), module);
