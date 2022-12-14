import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding-bottom: 0.5rem;

  background: ${(props) => props.theme["other-background"]};
  border-radius: 10px;

  cursor: pointer;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  h2 {
    font-size: 1rem;
  }

  span {
    color: ${(props) => props.theme["orange-500"]};
    font-weight: bold;
    font-size: 0.875rem;
  }
`;
