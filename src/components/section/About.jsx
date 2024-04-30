import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import myimg from "../../images/myimg.jpg";
import HeroBgAnimation from "../AboutBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContentAnimation,
  headTextAnimation,
  headContainerAnimation,
} from "../../utils/motion";
import Stars from "../canvas/Stars";
import { FacebookRounded, LinkedIn } from "@mui/icons-material";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 32px;
  position: relative;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const AboutInnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const AboutLeftInnerContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const AboutRightInnerContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 68px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  color: ${({ theme }) => theme.primary};
`;
const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 400px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
const AboutBg = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 104%;
  width: 100%;
  height: 100%;
  max-width: 1360px
  justify-content: end;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px){
    justify-content: center;
    padding: 0 0;
    left: 50%;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-left: 40px;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function About() {
  return (
    <div id="About">
      <AboutContainer>
        <Stars />
        <AboutBg>
          <HeroBgAnimation />
        </AboutBg>
        <motion.div {...headContainerAnimation}>
          <AboutInnerContainer>
            <AboutLeftInnerContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am
                  <br /> {Bio.name}
                </Title>
              </motion.div>
              <TextLoop>
                I am a{" "}
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <SocialMediaIcons>
                <SocialMediaIcon href={Bio.linkedin} target="display">
                  <LinkedIn />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.discord} target="display">
                  <FaDiscord />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.github} target="display">
                  <FaGithub />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.facebook} target="display">
                  <FacebookRounded />
                </SocialMediaIcon>
              </SocialMediaIcons>
              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </AboutLeftInnerContainer>
            <AboutRightInnerContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={myimg}></Img>
                </Tilt>
              </motion.div>
            </AboutRightInnerContainer>
          </AboutInnerContainer>
        </motion.div>
      </AboutContainer>
    </div>
  );
}

export default About;
