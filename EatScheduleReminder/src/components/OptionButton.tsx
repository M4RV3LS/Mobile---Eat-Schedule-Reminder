import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { EsrIcon } from './EsrIcon';
import type { EsrIconName } from '../types';
import type { ColorTokens } from '../tokens';

interface OptionButtonProps {
  icon: EsrIconName;
  label: string;
  selected: boolean;
  onTap: () => void;
  t: ColorTokens;
}

export function OptionButton({ icon, label, selected, onTap, t }: OptionButtonProps) {
  return (
    <Pressable
      onPress={onTap}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: selected ? t.primaryTint : t.surface,
          borderColor: selected
            ? pressed
              ? t.primaryDark
              : t.primary
            : t.border,
          borderWidth: selected ? 2 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
      ]}
    >
      <EsrIcon name={icon} size={24} color={selected ? t.primary : t.textSecondary} />
      <Text style={[styles.label, { color: t.textPrimary }]}>{label}</Text>
      {selected && <EsrIcon name="check-bold" size={20} color={t.primary} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 64,
    paddingHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
});
