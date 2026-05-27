import React, { useRef, useEffect } from 'react';
import { Pressable, Text, View, StyleSheet, Animated, Easing } from 'react-native';
import { EsrIcon } from './EsrIcon';
import type { Selections, SendState } from '../types';
import type { ColorTokens, ShadowTokens } from '../tokens';

interface SendButtonProps {
  state: SendState;
  sel: Selections;
  onSend: () => void;
  t: ColorTokens;
  shadow: ShadowTokens;
}

export function SendButton({ state, sel, onSend, t, shadow }: SendButtonProps) {
  const kDone = sel.koko.lunch && sel.koko.dinner;
  const dDone = sel.dede.lunch && sel.dede.dinner;
  const bothDone = kDone && dDone;

  const spinAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (state === 'loading') {
      spinAnim.setValue(0);
      Animated.loop(
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      spinAnim.stopAnimation();
    }
  }, [state]);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  let labelNode: React.ReactNode;
  let bg: string;
  let textColor: string;
  let disabled: boolean;
  let hasShadow: boolean;

  if (state === 'loading') {
    labelNode = (
      <Animated.View
        style={[styles.spinner, { transform: [{ rotate: spin }] }]}
      />
    );
    bg = t.primary;
    textColor = '#fff';
    disabled = true;
    hasShadow = true;
  } else if (state === 'success') {
    labelNode = (
      <View style={styles.row}>
        <EsrIcon name="check-bold" size={20} color="#fff" />
        <Text style={styles.successText}>Terkirim</Text>
      </View>
    );
    bg = t.success;
    textColor = '#fff';
    disabled = true;
    hasShadow = true;
  } else if (!bothDone) {
    let text: string;
    if (!sel.koko.lunch && !sel.koko.dinner && !sel.dede.lunch && !sel.dede.dinner) {
      text = 'Pilih opsi untuk Koko dan Dede';
    } else if (kDone && !dDone) {
      text = 'Lengkapi pilihan Dede dulu';
    } else if (dDone && !kDone) {
      text = 'Lengkapi pilihan Koko dulu';
    } else {
      text = 'Pilih opsi untuk Koko dan Dede';
    }
    labelNode = <Text style={[styles.buttonText, { color: t.textSecondary }]}>{text}</Text>;
    bg = t.border;
    textColor = t.textSecondary;
    disabled = true;
    hasShadow = false;
  } else {
    labelNode = (
      <View style={styles.row}>
        <EsrIcon name="whatsapp" size={20} color="#fff" />
        <Text style={styles.buttonText}>Kirim ke Mbak</Text>
      </View>
    );
    bg = t.primary;
    textColor = '#fff';
    disabled = false;
    hasShadow = true;
  }

  return (
    <Pressable
      disabled={disabled}
      onPress={onSend}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed && !disabled ? t.primaryDark : bg,
        },
        hasShadow && shadow.button,
      ]}
    >
      {typeof labelNode === 'string' ? (
        <Text style={[styles.buttonText, { color: textColor }]}>{labelNode}</Text>
      ) : (
        labelNode
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  successText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  spinner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: 'rgba(255,255,255,0.35)',
    borderTopColor: '#fff',
  },
});
