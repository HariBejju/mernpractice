import React from 'react';
import { useSpring, animated } from 'react-spring';
import "../css/landingAnimation.css";

const LandingAnimation = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  const fadeInDelayed = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
    delay: 500
  });

  return (
    <div className="landing-container">
      <animated.h1 style={fadeIn}>Welcome to Chat GPT</animated.h1>
      <animated.p style={fadeInDelayed}>Your AI Assistant to Enhance Your Conversations</animated.p>
    </div>
  );
};

export default LandingAnimation;
