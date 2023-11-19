import { useDispatch } from "react-redux";
import { addReaction } from "./postsSlice";
import styled from "styled-components";

const Container = styled.div``;
const Button = styled.button``;

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "🍵",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </Button>
    );
  });

  return <Container>{reactionButtons}</Container>;
};

export default ReactionButtons;
