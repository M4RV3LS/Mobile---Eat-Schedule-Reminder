import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LIGHT, DARK, LIGHT_SHADOW, DARK_SHADOW } from '../tokens';
import { scheduleDailyReminder, cancelDailyReminder } from '../notifications';
import type { ColorTokens, ShadowTokens } from '../tokens';

const THEME_KEY = 'esr_theme';
const PHONE_KEY = 'esr_phone';
const LAST_SENT_KEY = 'esr_last_sent';
const REMINDER_ENABLED_KEY = 'esr_reminder_enabled';
const REMINDER_HOUR_KEY = 'esr_reminder_hour';
const REMINDER_MINUTE_KEY = 'esr_reminder_minute';

export interface ReminderTime {
  hour: number;
  minute: number;
}

interface AppContextType {
  dark: boolean;
  toggleTheme: () => void;
  t: ColorTokens;
  shadow: ShadowTokens;
  phoneNumber: string;
  setAndSavePhone: (phone: string) => void;
  lastSent: string;
  setAndSaveLastSent: (label: string) => void;
  reminderEnabled: boolean;
  reminderTime: ReminderTime;
  setAndSaveReminder: (enabled: boolean, time: ReminderTime) => void;
  ready: boolean;
}

const DEFAULT_REMINDER: ReminderTime = { hour: 20, minute: 0 };

const AppContext = createContext<AppContextType>({
  dark: false,
  toggleTheme: () => {},
  t: LIGHT,
  shadow: LIGHT_SHADOW,
  phoneNumber: '',
  setAndSavePhone: () => {},
  lastSent: '',
  setAndSaveLastSent: () => {},
  reminderEnabled: true,
  reminderTime: DEFAULT_REMINDER,
  setAndSaveReminder: () => {},
  ready: false,
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastSent, setLastSent] = useState('');
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [reminderTime, setReminderTime] = useState<ReminderTime>(DEFAULT_REMINDER);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem(THEME_KEY),
      AsyncStorage.getItem(PHONE_KEY),
      AsyncStorage.getItem(LAST_SENT_KEY),
      AsyncStorage.getItem(REMINDER_ENABLED_KEY),
      AsyncStorage.getItem(REMINDER_HOUR_KEY),
      AsyncStorage.getItem(REMINDER_MINUTE_KEY),
    ]).then(([theme, phone, sent, enabled, hour, minute]) => {
      if (theme === 'dark') setDark(true);
      if (phone) setPhoneNumber(phone);
      if (sent) setLastSent(sent);

      const isEnabled = enabled !== 'false';
      const h = hour ? parseInt(hour, 10) : DEFAULT_REMINDER.hour;
      const m = minute ? parseInt(minute, 10) : DEFAULT_REMINDER.minute;
      setReminderEnabled(isEnabled);
      setReminderTime({ hour: h, minute: m });

      if (isEnabled) {
        scheduleDailyReminder(h, m);
      }

      setReady(true);
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      AsyncStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
      return next;
    });
  }, []);

  const setAndSavePhone = useCallback((phone: string) => {
    setPhoneNumber(phone);
    AsyncStorage.setItem(PHONE_KEY, phone);
  }, []);

  const setAndSaveLastSent = useCallback((label: string) => {
    setLastSent(label);
    AsyncStorage.setItem(LAST_SENT_KEY, label);
  }, []);

  const setAndSaveReminder = useCallback((enabled: boolean, time: ReminderTime) => {
    setReminderEnabled(enabled);
    setReminderTime(time);
    AsyncStorage.setItem(REMINDER_ENABLED_KEY, String(enabled));
    AsyncStorage.setItem(REMINDER_HOUR_KEY, String(time.hour));
    AsyncStorage.setItem(REMINDER_MINUTE_KEY, String(time.minute));

    if (enabled) {
      scheduleDailyReminder(time.hour, time.minute);
    } else {
      cancelDailyReminder();
    }
  }, []);

  const t = dark ? DARK : LIGHT;
  const shadow = dark ? DARK_SHADOW : LIGHT_SHADOW;

  return (
    <AppContext.Provider
      value={{
        dark, toggleTheme, t, shadow,
        phoneNumber, setAndSavePhone,
        lastSent, setAndSaveLastSent,
        reminderEnabled, reminderTime, setAndSaveReminder,
        ready,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
