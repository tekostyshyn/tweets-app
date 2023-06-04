import styled from 'styled-components';

export const Item = styled.li`
  height: 460px;
  width: 380px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 284px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  background-image: url('images/picture.png'), url('images/logo.png');
  background-position: top 28px left 36px, top 20px left 20px;
  background-repeat: no-repeat, no-repeat;

  &::after {
    content: '';
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0;
    top: 214px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  background-color: #5736a3;
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  color: #ebd8ff;
  line-height: 1.21;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 196px;
  border: none;
  border-radius: 10.31px;
  padding: 14px 28px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }

  &.isFollowing {
    background-color: #5cd3a8;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
