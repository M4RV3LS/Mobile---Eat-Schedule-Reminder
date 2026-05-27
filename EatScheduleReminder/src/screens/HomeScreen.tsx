import React, { useState, useCallback } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useApp } from '../context/AppContext';
import { EsrIcon } from '../components/EsrIcon';
import { PersonTabs } from '../components/PersonTabs';
import { QuestionGroup } from '../components/QuestionGroup';
import { MessagePreview } from '../components/MessagePreview';
import { SendButton } from '../components/SendButton';
import { ErrorBanner } from '../components/ErrorBanner';
import { esrTomorrow, esrBuildMessage, formatPhoneForWhatsApp } from '../messages';
import { DEFAULT_SELECTIONS } from '../types';
import type { RootStackParamList } from '../../App';
import type { PersonId, QuestionType, Selections, SendState } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const { t, shadow, phoneNumber, lastSent, setAndSaveLastSent } = useApp();
  const insets = useSafeAreaInsets();

  const [selections, setSelections] = useState<Selections>(DEFAULT_SELECTIONS);
  const [activeTab, setActiveTab] = useState<PersonId>('koko');
  const [sendState, setSendState] = useState<SendState>('idle');
  const [hasError, setHasError] = useState(false);

  const select = useCallback((person: PersonId, q: QuestionType, val: string) => {
    setSelections((s) => ({
      ...s,
      [person]: {
        ...s[person],
        [q]: s[person][q] === val ? null : val,
      },
    }));
    setHasError(false);
  }, []);

  const message = esrBuildMessage(selections);

  const handleSend = useCallback(async () => {
    if (!message || sendState !== 'idle') return;

    if (!phoneNumber.trim()) {
      Alert.alert(
        'Nomor WhatsApp Belum Diatur',
        'Silakan atur nomor WhatsApp di Pengaturan terlebih dahulu.',
        [
          { text: 'Batal', style: 'cancel' },
          { text: 'Buka Pengaturan', onPress: () => navigation.navigate('Settings') },
        ],
      );
      return;
    }

    setSendState('loading');
    setHasError(false);

    try {
      const phone = formatPhoneForWhatsApp(phoneNumber);
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      const supported = await Linking.canOpenURL(url);

      if (!supported) {
        setSendState('idle');
        setHasError(true);
        return;
      }

      await Linking.openURL(url);

      setSendState('success');
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setAndSaveLastSent(`Hari ini ${hours}:${minutes}`);

      setTimeout(() => {
        setSendState('idle');
        setSelections({ ...DEFAULT_SELECTIONS });
      }, 2200);
    } catch {
      setSendState('idle');
      setHasError(true);
    }
  }, [message, sendState, phoneNumber, navigation, setAndSaveLastSent]);

  const handleRetry = useCallback(() => {
    setHasError(false);
    handleSend();
  }, [handleSend]);

  return (
    <View style={[styles.root, { backgroundColor: t.bg, paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 40 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={[styles.title, { color: t.textPrimary }]}>Jadwal Makan Besok</Text>
            <Text style={[styles.subtitle, { color: t.textSecondary }]}>
              {esrTomorrow()}
            </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('Settings')}
            style={styles.settingsBtn}
            accessibilityLabel="Pengaturan"
          >
            <EsrIcon name="settings" size={22} color={t.textSecondary} />
          </Pressable>
        </View>

        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: t.border }]} />

        {/* Person Tabs */}
        <PersonTabs
          active={activeTab}
          onChange={setActiveTab}
          kokoDone={!!(selections.koko.lunch && selections.koko.dinner)}
          dedeDone={!!(selections.dede.lunch && selections.dede.dinner)}
          t={t}
        />

        {/* Questions */}
        <View style={styles.questions}>
          <QuestionGroup
            q="lunch"
            person={activeTab}
            selections={selections}
            onSelect={select}
            t={t}
          />
          <QuestionGroup
            q="dinner"
            person={activeTab}
            selections={selections}
            onSelect={select}
            t={t}
          />
        </View>

        {/* Preview + Send + Footer */}
        <View style={styles.footer}>
          <MessagePreview msg={message} t={t} />
          <SendButton state={sendState} sel={selections} onSend={handleSend} t={t} shadow={shadow} />
          {hasError && <ErrorBanner onRetry={handleRetry} t={t} />}
          {lastSent && sendState !== 'success' && !hasError && (
            <Text style={[styles.lastSent, { color: t.textSecondary }]}>
              Terakhir dikirim: {lastSent}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 31,
    letterSpacing: -0.2,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 21,
  },
  settingsBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -4,
  },
  divider: {
    height: 1,
    marginVertical: 24,
  },
  questions: {
    marginTop: 32,
    gap: 32,
  },
  footer: {
    marginTop: 8,
  },
  lastSent: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 12,
  },
});
