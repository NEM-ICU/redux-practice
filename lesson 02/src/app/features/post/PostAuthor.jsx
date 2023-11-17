import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectAllUsers } from "../users/usersSlice";

const Span = styled.span``;

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <Span>by {author ? author.name : "Unknown author"}</Span>;
};

export default PostAuthor;
