import {
  withClientState,
} from 'apollo-link-state';

import cache from './cache';

const DEFAULT_CREATE_QUEST = {
  name: '',
  __typename: 'CreateQuest',
};

const defaults = {
  CreateQuest: DEFAULT_CREATE_QUEST,
};

const resolvers = {
  Mutation: {},
};

const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
});

export {
  DEFAULT_CREATE_QUEST,
};

export default stateLink;
