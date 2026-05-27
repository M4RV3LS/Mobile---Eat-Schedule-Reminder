import React, { useState } from 'react';
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';
import { EsrIcon } from './EsrIcon';
import type { ColorTokens } from '../tokens';
import type { ReminderTime } from '../context/AppContext';

interface Props {
  visible: boolean;
  initial: ReminderTime;
  onConfirm: (time: ReminderTime) => void;
  onCancel: () => void;
  t: ColorTokens;
}

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

export function TimePickerModal({ visible, initial, onConfirm, onCancel, t }: Props) {
  const [hour, setHour] = useState(initial.hour);
  const [minute, setMinute] = useState(initial.minute);

  const incHour = () => setHour((h) => (h + 1) % 24);
  const decHour = () => setHour((h) => (h - 1 + 24) % 24);
  const incMinute = () => setMinute((m) => (m + 5) % 60);
  const decMinute = () => setMinute((m) => (m - 5 + 60) % 60);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
      onShow={() => {
        setHour(initial.hour);
        setMinute(initial.minute);
      }}
    >
      <Pressable style={styles.overlay} onPress={onCancel}>
        <Pressable style={[styles.sheet, { backgroundColor: t.surface }]} onPress={() => {}}>
          <Text style={[styles.title, { color: t.textPrimary }]}>Atur Waktu Pengingat</Text>
          <Text style={[styles.subtitle, { color: t.textSecondary }]}>
            Notifikasi akan dikirim setiap hari pada waktu ini
          </Text>

          <View style={styles.pickerRow}>
            {/* Hour */}
            <View style={styles.column}>
              <Pressable onPress={incHour} style={[styles.arrowBtn, { backgroundColor: t.primaryTint }]}>
                <EsrIcon name="chevron-up" size={24} color={t.primary} />
              </Pressable>
              <View style={[styles.digitBox, { backgroundColor: t.bg, borderColor: t.border }]}>
                <Text style={[styles.digit, { color: t.textPrimary }]}>{pad(hour)}</Text>
              </View>
              <Pressable onPress={decHour} style={[styles.arrowBtn, { backgroundColor: t.primaryTint }]}>
                <EsrIcon name="chevron-down" size={24} color={t.primary} />
              </Pressable>
              <Text style={[styles.unitLabel, { color: t.textSecondary }]}>Jam</Text>
            </View>

            <Text style={[styles.colon, { color: t.textPrimary }]}>:</Text>

            {/* Minute */}
            <View style={styles.column}>
              <Pressable onPress={incMinute} style={[styles.arrowBtn, { backgroundColor: t.primaryTint }]}>
                <EsrIcon name="chevron-up" size={24} color={t.primary} />
              </Pressable>
              <View style={[styles.digitBox, { backgroundColor: t.bg, borderColor: t.border }]}>
                <Text style={[styles.digit, { color: t.textPrimary }]}>{pad(minute)}</Text>
              </View>
              <Pressable onPress={decMinute} style={[styles.arrowBtn, { backgroundColor: t.primaryTint }]}>
                <EsrIcon name="chevron-down" size={24} color={t.primary} />
              </Pressable>
              <Text style={[styles.unitLabel, { color: t.textSecondary }]}>Menit</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <Pressable
              onPress={onCancel}
              style={[styles.actionBtn, { borderColor: t.border, borderWidth: 1 }]}
            >
              <Text style={[styles.actionText, { color: t.textSecondary }]}>Batal</Text>
            </Pressable>
            <Pressable
              onPress={() => onConfirm({ hour, minute })}
              style={[styles.actionBtn, { backgroundColor: t.primary }]}
            >
              <Text style={[styles.actionText, { color: '#fff' }]}>Simpan</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  sheet: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 28,
  },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 32,
  },
  column: {
    alignItems: 'center',
    gap: 8,
  },
  arrowBtn: {
    width: 48,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitBox: {
    width: 80,
    height: 72,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  digit: {
    fontSize: 36,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  colon: {
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 28,
  },
  unitLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  actionBtn: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 15,
    fontWeight: '600',
  },
});
