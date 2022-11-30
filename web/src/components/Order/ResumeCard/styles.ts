import styled from "styled-components";

export const ResumeCardContainer = styled.div`
  background: ${(props) => props.theme["orange-50"]};
  padding: 0.875rem 0;
  border-radius: 10px;

  display: flex;
  align-items: flex-start;
  padding: 0.875rem;
  gap: 0.8rem;

  img {
    max-width: 40%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const MoreAndMinus = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
`;
