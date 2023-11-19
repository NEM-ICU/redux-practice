import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import styled from "styled-components";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostSection = styled.section`
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
`;

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

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderdPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderdPosts = orderdPosts.map((post) => (
    <Article key={post.id}>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content.substring(0, 100)}</PostContent>
      <PostCredit>
        <PostAuthor userId={post.userId} />
        <TimeAgo time={post.date} />
      </PostCredit>
      <ReactionButtons post={post} />
    </Article>
  ));

  return (
    <PostSection>
      <Title>Posts</Title>
      {renderdPosts}
    </PostSection>
  );
};

export default PostsList;
