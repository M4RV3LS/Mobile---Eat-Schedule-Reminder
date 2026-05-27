import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { EsrIcon } from './EsrIcon';
import type { ColorTokens } from '../tokens';

interface MessagePreviewProps {
  msg: string | null;
  t: ColorTokens;
}

export function MessagePreview({ msg, t }: MessagePreviewProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    if (msg) {
      fadeAnim.setValue(0);
      slideAnim.setValue(8);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [msg]);

  if (!msg) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: t.primaryTint,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <View style={styles.header}>
        <EsrIcon name="whatsapp" size={14} color={t.textSecondary} />
        <Text style={[styles.headerText, { color: t.textSecondary }]}>
          Pesan untuk Mbak:
        </Text>
      </View>
      <Text style={[styles.body, { color: t.textPrimary }]}>{msg}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  body: {
    fontSize: 14,
    lineHeight: 21,
    fontStyle: 'italic',
  },
});
