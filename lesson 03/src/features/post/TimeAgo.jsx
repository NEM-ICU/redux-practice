import { formatDistanceToNow, parseISO } from "date-fns";
import styled from "styled-components";

const Span = styled.span``;
const Time = styled.i``;

const TimeAgo = ({ time }) => {
  let timeAgo = "";

  if (time) {
    const date = parseISO(time);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <Span title={time}>
      &nbsp; <Time>{timeAgo}</Time>
    </Span>
  );
};

export default TimeAgo;
