import { useRef, FormEvent,useState } from "react";

import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import CreatableReactSelect from "react-select/creatable";

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
  } & Partial<NoteData>
  

const NoteForm = ({onSubmit}) => {
    const [selectedTags, setSelectedTags] = useState(0);

  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
        title: titleRef.current!.value,
        markdown: markdownRef.current!.value,
        tags: selectedTags,
      })
  
    //   navigate("..")
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='tile'>
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId='markdown'>
          <Form.Label>Body</Form.Label>
          <Form.Control ref={markdownRef} required as='textarea' rows={5} />
        </Form.Group>
        <Stack direction='horizontal' gap={3} className='justify-content-end'>
          <Button type='submit'>Save</Button>
          <Link to='..'>
            <Button type='button' variant='outline-secondary'>
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

export default NoteForm;
