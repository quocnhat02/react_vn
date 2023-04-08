/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 36px);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CardAmount = styled.span`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: bold;
  background: linear-gradient(
    90deg,
    rgba(244, 86, 232, 1) 0%,
    rgba(154, 253, 29, 1) 85%,
    rgba(69, 252, 198, 1) 100%
  );
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(
        90deg,
        rgba(86, 113, 244, 1) 0%,
        rgba(45, 238, 200, 1) 18%,
        rgba(187, 75, 227, 1) 85%
      );
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        90deg,
        rgba(244, 86, 232, 1) 0%,
        rgba(154, 253, 29, 1) 85%,
        rgba(69, 252, 198, 1) 100%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg src='https://wallpaperaccess.com/full/54671.jpg' />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <UserName>@nhatnguyen</UserName>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CardTitle>ReactJS</CardTitle>
          <CardAmount secondary={props.secondary} fontSize='22px'>
            12,000 VND
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
