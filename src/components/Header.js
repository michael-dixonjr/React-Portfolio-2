import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: michaeltonydixon@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/michael-dixonjr",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/michael-dixon-jr/",
  },
  {
    icon: faDiscord,
    url: "https://www.discordapp.com/users/302283847649722368",
  },
  {
    icon: faFile,
    url: "https://docs.google.com/document/d/15C3Tt0Xt3UkRYobCOhDy50e4Nnx7sK6Z/edit?usp=share_link&ouid=105351899438621566484&rtpof=true&sd=true",
  },
];

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsScrollingDown(position > scrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      ref={headerRef}
      transform={isScrollingDown ? "translateY(-200px)" : "translateY(0)"}
      transitionTimingFunction="ease-in-out"
      backgroundColor="#805AD5"
    >
      <Box color="#E4F8D5" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social) => (
              <Box
                key={social + "icon"}
                as="a"
                href={social.url}
                target="_blank"
                padding={4}
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </Box>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <Box as="a" href="/React-Portfolio-2/#projects" onClick={handleClick("projects")}>
                Projects <FontAwesomeIcon icon={faGithub} />
              </Box>
              <Box
                as="a"
                href="/React-Portfolio-2/#contact-me"
                onClick={handleClick("contactme")}
              >
                Contact me <FontAwesomeIcon icon={faEnvelope} />
              </Box>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
