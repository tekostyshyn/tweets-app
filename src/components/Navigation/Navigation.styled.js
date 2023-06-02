import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #471ca9;
  font-size: 24px;
  font-weight: 600;
  margin-right: 30px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #5cd3a8;
  }

  &::after {
    position: absolute;
    bottom: -7px;
    left: 0;
    opacity: 0;

    content: '';
    background-color: #5cd3a8;
    height: 3px;
    width: 100%;
    border-radius: 2px;
  }

  &.active {
    color: #5cd3a8;

    &::after {
      opacity: 100;
    }
  }
`;
