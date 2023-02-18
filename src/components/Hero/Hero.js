import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

function handleClick(e) {
  // e.preventDefault();
  window.location.href = "https://www.linkedin.com/in/virat-singh1997/";
}

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi My Name is <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #4ca5ff 2.34%, #b673f8 100.78%)",
              WebkitBackgroundClip: "text",
            }}
          >
            Virat Singh
          </span>{" "}
          <br />
        </SectionTitle>
        <SectionText>
          Building intuitive and accessible user interfaces for all users that
          increase customer satisfaction
        </SectionText>
        <Button href={"https://calendly.com/virat-singh199715/30min"}>
          Book a Call to Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
