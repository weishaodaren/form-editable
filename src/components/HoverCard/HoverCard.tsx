import type { PropsWithChildren } from 'react';
import { useRef, useEffect, memo, useMemo } from 'react';

import Tilt from 'vanilla-tilt';

const defaultOption = {
  reverse: false, // reverse the tilt direction
  max: 45, // max tilt rotation (degrees)
  startX: 0, // the starting tilt on the X axis, in degrees.
  startY: 0, // the starting tilt on the Y axis, in degrees.
  perspective: 800, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 0.8, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be enabled. Can be "x" or "y"
  reset: true, // If the tilt effect has to be reset on exit.
  'reset-to-start': true, // Whether the exit reset will go to [0,0] (default) or [startX, startY]
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  glare: true, // if it should have a "glare" effect
  'max-glare': 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  'glare-prerender': false, // false = VanillaTilt creates the glare elements for you, otherwise
  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  // 'mouse-event-element': null, // css-selector or link to HTML-element what will be listen mouse events
  gyroscope: true, // Boolean to enable/disable device orientation detection,
  gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
  gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
};

type HoverCardProps = Partial<typeof defaultOption>;

/**
 * 卡片悬浮
 */
const HoverCard = memo(({ children, ...option }: PropsWithChildren<HoverCardProps>) => {
  /**
   * Ref
   */
  const cardRef = useRef<HTMLDivElement & { vanillaTilt: Tilt }>(null);

  /**
   * Memo
   * @description 配置项
   */
  const options = useMemo(() => option, [option]);

  /**
   * Effect
   * @description 初始化Tilt
   */
  useEffect(() => {
    if (!cardRef.current) return () => void 0;

    const { current } = cardRef;

    Tilt.init(current, { ...defaultOption, ...options });

    return () => {
      current?.vanillaTilt?.destroy?.();
    };
  }, [options]);

  return (
    <div ref={cardRef} className="w-[inherit] h-[inherit] transform-3d">
      <div className="shadow" style={{ transform: 'translateZ(40px)' }}>
        {children}
      </div>
    </div>
  );
});

export default HoverCard;
