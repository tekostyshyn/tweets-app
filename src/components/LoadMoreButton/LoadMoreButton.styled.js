import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 30px auto;
  font-size: 20px;
  font-weight: 600;
  color: #5cd3a8;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  width: 230px;
  height: 40px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  }
`;
