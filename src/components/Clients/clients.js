import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { List, ListItem } from "../Technologies/TechnologiesStyles";

const Clients = () => (
  <Section id="client">
    <SectionDivider divider />
    <SectionTitle>Clients</SectionTitle>
    <SectionText>
      I've worked with a range a Clients in the web development world
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <img src="/images/logo1.png" width={"120px"} height={"70px"} />
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <img src="/images/logo2.png" width={"120px"} height={"70px"} />
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <img src="/images/logo3.png" width={"120px"} height={"70px"} />
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <img src="/images/logo4.png" width={"120px"} height={"100px"} />
        </picture>
      </ListItem>
    </List>
  </Section>
);

export default Clients;
