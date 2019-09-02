
import gql from 'graphql-tag';

export default gql`
  mutation CreateQuest($name: String!, $description: String!) {
    createQuest(input: { name: $name, description: $description }) {
      id,
    }
  }
`;
