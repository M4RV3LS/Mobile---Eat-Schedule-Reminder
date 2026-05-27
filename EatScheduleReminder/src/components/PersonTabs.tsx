import React, { useRef, useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet, Animated, LayoutChangeEvent } from 'react-native';
import type { PersonId } from '../types';
import type { ColorTokens } from '../tokens';

interface PersonTabsProps {
  active: PersonId;
  onChange: (id: PersonId) => void;
  kokoDone: boolean;
  dedeDone: boolean;
  t: ColorTokens;
}

export function PersonTabs({ active, onChange, kokoDone, dedeDone, t }: PersonTabsProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const padding = 4;
  const tabWidth = containerWidth > 0 ? (containerWidth - padding * 2) / 2 : 0;

  useEffect(() => {
    if (tabWidth <= 0) return;
    Animated.timing(translateX, {
      toValue: active === 'koko' ? 0 : tabWidth,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [active, tabWidth]);

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  const tabs: { id: PersonId; label: string; done: boolean }[] = [
    { id: 'koko', label: 'Koko', done: kokoDone },
    { id: 'dede', label: 'Dede', done: dedeDone },
  ];

  return (
    <View
      onLayout={onLayout}
      style={[styles.container, { backgroundColor: t.surface, borderColor: t.border }]}
    >
      {tabWidth > 0 && (
        <Animated.View
          style={[
            styles.indicator,
            {
              backgroundColor: t.primary,
              width: tabWidth,
              left: padding,
              transform: [{ translateX }],
            },
          ]}
        />
      )}
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <Pressable key={tab.id} onPress={() => onChange(tab.id)} style={styles.tab}>
            <Text
              style={[
                styles.tabText,
                {
                  color: isActive ? '#FFFFFF' : t.textSecondary,
                  fontSize: isActive ? 16 : 15,
                  fontWeight: isActive ? '600' : '500',
                },
              ]}
            >
              {tab.label}
            </Text>
            {tab.done && (
              <View
                style={[
                  styles.dot,
                  { backgroundColor: isActive ? '#FFFFFF' : t.success },
                ]}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    padding: 4,
    borderWidth: 1,
    borderRadius: 999,
    flexDirection: 'row',
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    top: 4,
    bottom: 4,
    borderRadius: 999,
    shadowColor: '#2D241F',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    zIndex: 1,
  },
  tabText: {},
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
