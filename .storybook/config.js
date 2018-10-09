import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import apolloStorybookDecorator from 'apollo-storybook-react';
import typeDefs from '../wherever/your/typeDefs/live';
import mocks from '../wherever/your/mocks/live';

function loadStories() {
  require('./stories');
  // You can require as many stories as you need.
}

addDecorator(
    apolloStorybookDecorator({
        typeDefs,
        mocks,
      }),
    StoryRouter(),
    (storyFn, context) => withConsole()(storyFn)(context)
);

configure(loadStories, module);