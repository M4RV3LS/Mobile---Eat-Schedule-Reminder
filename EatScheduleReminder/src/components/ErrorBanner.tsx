import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { EsrIcon } from './EsrIcon';
import type { ColorTokens } from '../tokens';

interface ErrorBannerProps {
  onRetry: () => void;
  t: ColorTokens;
}

export function ErrorBanner({ onRetry, t }: ErrorBannerProps) {
  return (
    <View style={[styles.container, { backgroundColor: t.errorTint }]}>
      <EsrIcon name="alert-circle" size={20} color={t.error} />
      <Text style={[styles.message, { color: t.error }]}>Gagal mengirim. Coba lagi?</Text>
      <Pressable onPress={onRetry}>
        <Text style={[styles.retry, { color: t.error }]}>Coba Lagi</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  message: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  retry: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
