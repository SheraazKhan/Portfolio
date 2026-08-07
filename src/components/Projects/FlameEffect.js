import React, { useEffect, useMemo } from 'react';
import {
  FlameContainer,
  OpenBookBase,
  BookPageLeft,
  BookPageRight,
  BookSpineLine,
  MagicGlow,
  EnergyStream,
  LightRay,
  SparkParticle,
} from './FlameEffectStyles';

const FlameEffect = ({ onComplete }) => {
  const sparks = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 35 + Math.random() * 30,
      bottom: 40 + Math.random() * 15,
      duration: 1.5 + Math.random() * 1.5,
      delay: Math.random() * 2,
      color: ['#A855F7', '#06B6D4', '#EC4899', '#C084FC'][Math.floor(Math.random() * 4)],
    }));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <FlameContainer>
      <OpenBookBase>
        {/* Open book visible underneath */}
        <BookPageLeft />
        <BookPageRight />
        <BookSpineLine />

        {/* Main magical glow from the pages */}
        <MagicGlow />

        {/* Energy streams rising upward */}
        <EnergyStream
          width="50%"
          height="140%"
          color="rgba(168, 85, 247, 0.5)"
          colorMid="rgba(168, 85, 247, 0.15)"
          blur={10}
          duration={2.5}
          delay={0}
        />
        <EnergyStream
          width="35%"
          height="160%"
          color="rgba(6, 182, 212, 0.4)"
          colorMid="rgba(6, 182, 212, 0.1)"
          blur={8}
          duration={2.8}
          delay={0.3}
        />
        <EnergyStream
          width="25%"
          height="130%"
          color="rgba(236, 72, 153, 0.35)"
          colorMid="rgba(236, 72, 153, 0.1)"
          blur={7}
          duration={2.2}
          delay={0.6}
        />
        <EnergyStream
          width="60%"
          height="110%"
          color="rgba(255, 255, 255, 0.3)"
          colorMid="rgba(255, 255, 255, 0.05)"
          blur={12}
          duration={3}
          delay={0.1}
        />

        {/* Light rays fanning outward */}
        <LightRay angle={-25} color="rgba(168, 85, 247, 0.3)" blur={4} speed={1.8} delay={0} />
        <LightRay angle={-12} color="rgba(6, 182, 212, 0.25)" blur={3} speed={1.5} delay={0.2} />
        <LightRay angle={0} color="rgba(255, 255, 255, 0.3)" blur={2} speed={1.3} delay={0.1} />
        <LightRay angle={12} color="rgba(236, 72, 153, 0.25)" blur={3} speed={1.6} delay={0.4} />
        <LightRay angle={25} color="rgba(168, 85, 247, 0.3)" blur={4} speed={1.7} delay={0.3} />

        {/* Small bright spark particles */}
        {sparks.map((s) => (
          <SparkParticle
            key={s.id}
            color={s.color}
            duration={s.duration}
            delay={s.delay}
            style={{ left: `${s.left}%`, bottom: `${s.bottom}%` }}
          />
        ))}
      </OpenBookBase>
    </FlameContainer>
  );
};

export default FlameEffect;
