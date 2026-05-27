import React from 'react';
import Svg, { Path, Circle, Rect, Polyline } from 'react-native-svg';
import type { EsrIconName } from '../types';

interface EsrIconProps {
  name: EsrIconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function EsrIcon({ name, size = 24, color = '#000', strokeWidth = 2 }: EsrIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
  };

  const stroke = {
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'home':
      return (
        <Svg {...common}>
          <Path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z" {...stroke} />
        </Svg>
      );
    case 'briefcase':
      return (
        <Svg {...common}>
          <Rect x={3} y={7} width={18} height={13} rx={2} {...stroke} />
          <Path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" {...stroke} />
          <Path d="M3 13h18" {...stroke} />
        </Svg>
      );
    case 'x-circle':
      return (
        <Svg {...common}>
          <Circle cx={12} cy={12} r={9} {...stroke} />
          <Path d="M15 9l-6 6M9 9l6 6" {...stroke} />
        </Svg>
      );
    case 'check':
      return (
        <Svg {...common}>
          <Polyline points="20 6 9 17 4 12" {...stroke} />
        </Svg>
      );
    case 'check-bold':
      return (
        <Svg {...common}>
          <Polyline points="20 6 9 17 4 12" {...stroke} strokeWidth={2.6} />
        </Svg>
      );
    case 'alert-circle':
      return (
        <Svg {...common}>
          <Circle cx={12} cy={12} r={9} {...stroke} />
          <Path d="M12 8v5" {...stroke} />
          <Path d="M12 16h.01" {...stroke} />
        </Svg>
      );
    case 'settings':
      return (
        <Svg {...common}>
          <Circle cx={12} cy={12} r={3} {...stroke} />
          <Path
            d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8h0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
            {...stroke}
          />
        </Svg>
      );
    case 'arrow-left':
      return (
        <Svg {...common}>
          <Path d="M19 12H5M12 19l-7-7 7-7" {...stroke} />
        </Svg>
      );
    case 'whatsapp':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <Path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.2.3-.4.1-.2 0-.3 0-.4-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.8L2 22l5.3-1.4c1.4.7 3 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 15.1 3.7 13.6 3.7 12c0-4.6 3.7-8.3 8.3-8.3S20.3 7.4 20.3 12s-3.7 8.3-8.3 8.3z" />
        </Svg>
      );
    case 'clock':
      return (
        <Svg {...common}>
          <Circle cx={12} cy={12} r={9} {...stroke} />
          <Path d="M12 7v5l3 2" {...stroke} />
        </Svg>
      );
    case 'sun':
      return (
        <Svg {...common}>
          <Circle cx={12} cy={12} r={5} {...stroke} />
          <Path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" {...stroke} />
        </Svg>
      );
    case 'moon':
      return (
        <Svg {...common}>
          <Path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" {...stroke} />
        </Svg>
      );
    case 'bell':
      return (
        <Svg {...common}>
          <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" {...stroke} />
          <Path d="M13.73 21a2 2 0 0 1-3.46 0" {...stroke} />
        </Svg>
      );
    case 'chevron-up':
      return (
        <Svg {...common}>
          <Polyline points="18 15 12 9 6 15" {...stroke} />
        </Svg>
      );
    case 'chevron-down':
      return (
        <Svg {...common}>
          <Polyline points="6 9 12 15 18 9" {...stroke} />
        </Svg>
      );
    default:
      return null;
  }
}
