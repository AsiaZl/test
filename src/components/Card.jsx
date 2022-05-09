import { Card as ReactCard } from "reactstrap";
import styled from "@emotion/styled";

export const Card = styled(ReactCard)`
  margin: 0.5rem;
  color: #0d6efd;
  padding: 5rem;
  border-color: #0d6efd;
  transition: 0.5s;
  width: 80%;
  &:hover {
    transform: scale(1.05);
  }
`;
