import React from "react";

import { Body2 } from "./Body";
import Label from "./Label";

import styled from "@theme/";

const StyledFooter = styled.div`
  margin-bottom: 24px;
  padding: 0 8px;
  text-align: center;
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <Body2>
      <Label name="footer_content" />
    </Body2>
  </StyledFooter>
);

export default Footer;
