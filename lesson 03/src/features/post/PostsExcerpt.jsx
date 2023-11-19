import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import styled from "styled-components";

const Article = styled.article`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #555;
`;

const PostCredit = styled.div``;

const PostsExcerpt = ({ post }) => {
  return (
    <Article>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content.substring(0, 100)}</PostContent>
      <PostCredit>
        <PostAuthor userId={post.userId} />
        <TimeAgo time={post.date} />
      </PostCredit>
      <ReactionButtons post={post} />
    </Article>
  );
};

export default PostsExcerpt;
