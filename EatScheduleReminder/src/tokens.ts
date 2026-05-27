import { ViewStyle } from 'react-native';

export interface ColorTokens {
  bg: string;
  surface: string;
  primary: string;
  primaryDark: string;
  primaryTint: string;
  textPrimary: string;
  textSecondary: string;
  success: string;
  successTint: string;
  error: string;
  errorTint: string;
  border: string;
}

export interface ShadowTokens {
  card: ViewStyle;
  button: ViewStyle;
}

export const LIGHT: ColorTokens = {
  bg: '#FFF8F0',
  surface: '#FFFFFF',
  primary: '#E07856',
  primaryDark: '#C96440',
  primaryTint: '#FCEFE6',
  textPrimary: '#2D241F',
  textSecondary: '#7A6B61',
  success: '#5B8C5A',
  successTint: '#E8F0E7',
  error: '#C5524A',
  errorTint: '#FBEAE8',
  border: '#EDE3D8',
};

export const DARK: ColorTokens = {
  bg: '#1F1A16',
  surface: '#2A2420',
  primary: '#E89579',
  primaryDark: '#D17A5C',
  primaryTint: '#3A2D25',
  textPrimary: '#F5EFE8',
  textSecondary: '#A89789',
  success: '#7FAE7E',
  successTint: '#2D3A2D',
  error: '#E07570',
  errorTint: '#3A2522',
  border: '#3D3530',
};

export const LIGHT_SHADOW: ShadowTokens = {
  card: {
    shadowColor: '#2D241F',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  button: {
    shadowColor: '#2D241F',
    shadowOpacity: 0.16,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
};

export const DARK_SHADOW: ShadowTokens = {
  card: {
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  button: {
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
};
