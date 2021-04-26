import React from 'react';
import { Button, Textarea } from '../../shared';

const MAX_CHARACTERS = 280;

const NewTweetForm = ({ onSubmit }) => {
  const [content, setContent] = React.useState('');

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit({ content });
  };

  const handleChange = ev => setContent(ev.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        className="newTweetPage-textarea"
        placeholder="Hey! What's up!"
        maxLength={MAX_CHARACTERS}
        value={content}
        onChange={handleChange}
      />
      <div className="newTweetPage-footer">
        <span className="newTweetPage-characters">{`${content.length} / ${MAX_CHARACTERS}`}</span>
        <Button
          type="submit"
          className="newTweetPage-submit"
          variant="primary"
          disabled={!content}
        >
          Let's go!
        </Button>
      </div>
    </form>
  );
};

export default NewTweetForm;
