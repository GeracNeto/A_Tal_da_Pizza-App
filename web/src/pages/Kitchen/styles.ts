import styled from "styled-components";

export const KitchenContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  font-size: 1.2rem;

  th {
    background: ${(props) => props.theme.white};
  }

  table {
    border-collapse: collapse;
    margin: 0 auto;
    cursor: pointer;
  }

  th,
  td {
    padding: 0.6rem;
    text-align: center;
    width: 50%;
    border-bottom: 1px solid ${(props) => props.theme["orange-50"]};
  }

  th {
    font-weight: bold;
  }

  tr:hover:nth-child(1n + 2) {
    background-color: ${(props) => props.theme["orange-50"]};
    color: #fff;
  }
`;
