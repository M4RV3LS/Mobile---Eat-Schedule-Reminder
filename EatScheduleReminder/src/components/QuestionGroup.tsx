import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OptionButton } from './OptionButton';
import type { PersonId, QuestionType, Selections, EsrIconName } from '../types';
import type { ColorTokens } from '../tokens';

interface QuestionGroupProps {
  q: QuestionType;
  person: PersonId;
  selections: Selections;
  onSelect: (person: PersonId, q: QuestionType, val: string) => void;
  t: ColorTokens;
}

export function QuestionGroup({ q, person, selections, onSelect, t }: QuestionGroupProps) {
  const sel = selections[person][q];
  const personName = person === 'koko' ? 'Koko' : 'Dede';

  const label =
    q === 'lunch'
      ? `Di mana ${personName} makan siang?`
      : `Di mana ${personName} makan malam?`;

  const opts: { id: string; label: string; icon: EsrIconName }[] =
    q === 'lunch'
      ? [
          { id: 'home', label: 'Di Rumah', icon: 'home' },
          { id: 'office', label: 'Di Kantor', icon: 'briefcase' },
          { id: 'skip', label: 'Tidak Makan Siang', icon: 'x-circle' },
        ]
      : [
          { id: 'home', label: 'Di Rumah', icon: 'home' },
          { id: 'skip', label: 'Tidak Makan Malam', icon: 'x-circle' },
        ];

  return (
    <View>
      <Text style={[styles.heading, { color: t.textPrimary }]}>{label}</Text>
      <View style={styles.options}>
        {opts.map((o) => (
          <OptionButton
            key={o.id}
            icon={o.icon}
            label={o.label}
            selected={sel === o.id}
            onTap={() => onSelect(person, q, o.id)}
            t={t}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 25,
    marginBottom: 16,
  },
  options: {
    gap: 12,
  },
});
