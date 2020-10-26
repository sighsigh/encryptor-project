import React from "react";

import Toggle from "./Toggle";
import Label from "./Label";
import { SecondaryTitle as Title } from "./Title";

import styled from "@theme/";

const StyledHeader = styled.div`
  background: ${(props) => props.theme.colors.grey};
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 23px;
  position: relative;

  .home-link {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }

  @media ${(props) => props.theme.media_queries.phone_only} {
    .toggle {
      position: absolute;
      top: calc(100% + 24px);
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media ${(props) => props.theme.media_queries.tablet_up} {
    justify-content: space-between;

    .toggle {
      margin-right: 160px;
    }
  }
`;

interface Props {
  onChangeLang: () => void;
}

const Header: React.FC<Props> = (props) => (
  <StyledHeader>
    <a className="home-link" href="/">
      <Title>Encryptor</Title>
    </a>

    <div className="toggle">
      <Toggle
        val1={<Label name="xx_lang_content" />}
        val2={<Label name="en_lang_content" />}
        onToggle={props.onChangeLang}
      />
    </div>
  </StyledHeader>
);

export default Header;
