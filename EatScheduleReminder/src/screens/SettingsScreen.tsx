import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Switch, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { EsrIcon } from '../components/EsrIcon';
import { TimePickerModal } from '../components/TimePickerModal';
import type { RootStackParamList } from '../../App';

function padTime(n: number): string {
  return String(n).padStart(2, '0');
}

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export function SettingsScreen({ navigation }: Props) {
  const {
    t, shadow, dark, toggleTheme,
    phoneNumber, setAndSavePhone,
    reminderEnabled, reminderTime, setAndSaveReminder,
  } = useApp();
  const insets = useSafeAreaInsets();

  const [phone, setPhone] = useState(phoneNumber);
  const [focused, setFocused] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);

  useEffect(() => {
    setPhone(phoneNumber);
  }, [phoneNumber]);

  const handleSave = () => {
    setAndSavePhone(phone.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const hasChanges = phone.trim() !== phoneNumber;

  return (
    <KeyboardAvoidingView
      style={[styles.root, { backgroundColor: t.bg }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Nav */}
        <View style={styles.nav}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            <EsrIcon name="arrow-left" size={22} color={t.textPrimary} />
          </Pressable>
          <Text style={[styles.navTitle, { color: t.textPrimary }]}>Pengaturan</Text>
        </View>

        <View style={[styles.divider, { backgroundColor: t.border }]} />

        {/* Phone Section */}
        <View>
          <Text style={[styles.sectionLabel, { color: t.textSecondary }]}>KONTAK MBAK</Text>
          <Text style={[styles.fieldLabel, { color: t.textPrimary }]}>Nomor WhatsApp</Text>
          <View
            style={[
              styles.inputContainer,
              {
                backgroundColor: t.surface,
                borderColor: focused ? t.primary : t.border,
                borderWidth: focused ? 2 : 1,
              },
            ]}
          >
            <EsrIcon
              name="whatsapp"
              size={20}
              color={focused ? t.primary : t.textSecondary}
            />
            <TextInput
              style={[styles.input, { color: t.textPrimary }]}
              value={phone}
              onChangeText={setPhone}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="+62 812-3456-7890"
              placeholderTextColor={t.textSecondary}
              keyboardType="phone-pad"
              autoComplete="tel"
            />
          </View>
          <Text style={[styles.hint, { color: t.textSecondary }]}>
            Pesan jadwal makan akan dikirim ke nomor ini setiap malam.
          </Text>
        </View>

        {/* Theme Section */}
        <View style={styles.themeSection}>
          <Text style={[styles.sectionLabel, { color: t.textSecondary }]}>TAMPILAN</Text>
          <View
            style={[
              styles.themeRow,
              {
                backgroundColor: t.surface,
                borderColor: t.border,
              },
            ]}
          >
            <View style={[styles.themeIconBg, { backgroundColor: t.primaryTint }]}>
              <EsrIcon name={dark ? 'moon' : 'sun'} size={20} color={t.primary} />
            </View>
            <View style={styles.themeText}>
              <Text style={[styles.themeTitle, { color: t.textPrimary }]}>Mode Gelap</Text>
              <Text style={[styles.themeSubtitle, { color: t.textSecondary }]}>
                {dark ? 'Aktif' : 'Nonaktif'}
              </Text>
            </View>
            <Switch
              value={dark}
              onValueChange={toggleTheme}
              trackColor={{ false: '#E0D6CC', true: t.primary }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        {/* Reminder Section */}
        <View style={styles.reminderSection}>
          <Text style={[styles.sectionLabel, { color: t.textSecondary }]}>PENGINGAT</Text>

          {/* Enable/Disable Toggle */}
          <View
            style={[
              styles.reminderCard,
              { backgroundColor: t.surface, borderColor: t.border },
            ]}
          >
            <View style={[styles.reminderIconBg, { backgroundColor: t.primaryTint }]}>
              <EsrIcon name="bell" size={20} color={t.primary} />
            </View>
            <View style={styles.reminderText}>
              <Text style={[styles.reminderTitle, { color: t.textPrimary }]}>
                Pengingat Harian
              </Text>
              <Text style={[styles.reminderSubtitle, { color: t.textSecondary }]}>
                {reminderEnabled ? 'Aktif' : 'Nonaktif'}
              </Text>
            </View>
            <Switch
              value={reminderEnabled}
              onValueChange={(val) => setAndSaveReminder(val, reminderTime)}
              trackColor={{ false: '#E0D6CC', true: t.primary }}
              thumbColor="#FFFFFF"
            />
          </View>

          {/* Time Selector */}
          {reminderEnabled && (
            <Pressable
              onPress={() => setPickerVisible(true)}
              style={[
                styles.timeCard,
                { backgroundColor: t.surface, borderColor: t.border },
              ]}
            >
              <View style={[styles.reminderIconBg, { backgroundColor: t.primaryTint }]}>
                <EsrIcon name="clock" size={20} color={t.primary} />
              </View>
              <View style={styles.reminderText}>
                <Text style={[styles.reminderTitle, { color: t.textPrimary }]}>
                  Waktu Pengingat
                </Text>
                <Text style={[styles.reminderSubtitle, { color: t.textSecondary }]}>
                  Setiap hari pukul {padTime(reminderTime.hour)}:{padTime(reminderTime.minute)} WIB
                </Text>
              </View>
              <View style={[styles.timeBadge, { backgroundColor: t.primaryTint }]}>
                <Text style={[styles.timeBadgeText, { color: t.primary }]}>
                  {padTime(reminderTime.hour)}:{padTime(reminderTime.minute)}
                </Text>
              </View>
            </Pressable>
          )}
        </View>

        <View style={{ flex: 1 }} />

        <TimePickerModal
          visible={pickerVisible}
          initial={reminderTime}
          onCancel={() => setPickerVisible(false)}
          onConfirm={(time) => {
            setAndSaveReminder(true, time);
            setPickerVisible(false);
          }}
          t={t}
        />

        {/* Save Button */}
        <Pressable
          onPress={handleSave}
          disabled={!hasChanges && !saved}
          style={({ pressed }) => [
            styles.saveBtn,
            {
              backgroundColor: saved
                ? t.success
                : hasChanges
                  ? pressed
                    ? t.primaryDark
                    : t.primary
                  : t.border,
            },
            hasChanges && shadow.button,
          ]}
        >
          {saved ? (
            <View style={styles.savedRow}>
              <EsrIcon name="check-bold" size={18} color="#fff" />
              <Text style={styles.saveBtnText}>Tersimpan</Text>
            </View>
          ) : (
            <Text
              style={[
                styles.saveBtnText,
                { color: hasChanges ? '#fff' : t.textSecondary },
              ]}
            >
              Simpan
            </Text>
          )}
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
  },
  navTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    marginVertical: 24,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  hint: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 18,
  },
  themeSection: {
    marginTop: 32,
  },
  themeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 14,
  },
  themeIconBg: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeText: {
    flex: 1,
  },
  themeTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  themeSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  reminderSection: {
    marginTop: 32,
  },
  reminderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 14,
  },
  timeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 14,
    marginTop: 10,
  },
  reminderIconBg: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reminderText: {
    flex: 1,
  },
  reminderTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  reminderSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  timeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  timeBadgeText: {
    fontSize: 14,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  saveBtn: {
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  saveBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  savedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
