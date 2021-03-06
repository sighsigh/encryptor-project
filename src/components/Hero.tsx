import React from "react";

import { Title } from "./Title";
import Label from "./Label";

import styled from "@theme/";

const StyledHero = styled.div`
  color: ${(props) => props.theme.colors.white};
  word-break: break-word;
  text-align: center;
`;

const Hero: React.FC = () => (
  <StyledHero>
    <Title>
      <Label name="hero_content" />
    </Title>
  </StyledHero>
);

export default Hero;
