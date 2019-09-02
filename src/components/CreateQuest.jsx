import React from 'react';
import {
  useMutation,
} from '@apollo/react-hooks';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import CreateQuestMutation from 'GraphQL/mutations/CreateQuest';

export default function CreateQuest() {
  let nameInput;
  let descriptionInput;
  const [
    createQuest,
  ] = useMutation(CreateQuestMutation);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createQuest({
            variables: {
              name: nameInput.value,
              description: descriptionInput.value,
            },
          });
          nameInput.value = '';
          descriptionInput.value = '';
        }}
      >
        <Input
          inputRef={(node) => { nameInput = node; }}
          type="text"
          placeholder="Name"
        />
        <Input
          inputRef={(node) => { descriptionInput = node; }}
          type="text"
          placeholder="Description"
        />
        <Button
          label="Create Quest"
          type="submit"
        >
          Create Quest
        </Button>
      </form>
    </div>
  );
}
