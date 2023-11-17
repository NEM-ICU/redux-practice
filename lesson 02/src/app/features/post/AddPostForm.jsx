import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addPost } from "./postsSlice";

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333; /* Darker color for title */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #555; /* Slightly darker color for label */
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #e74c3c; /* Red color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold; /* Bold font weight */
  &:hover {
    background-color: #c0392b; /* Darker red on hover */
  }
`;

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <Container>
      <Title> Add Post</Title>
      <Form>
        <Label htmlFor="postTitle">Post Title:</Label>
        <Input
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="postContent">Content:</Label>
        <TextArea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={onSavePostClicked}>Save Post</Button>
      </Form>
    </Container>
  );
};

export default AddPostForm;
