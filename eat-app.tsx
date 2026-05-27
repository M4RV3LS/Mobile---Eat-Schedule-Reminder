import React from 'react';

// ─────────────────────────────────────────────────────────────
// Token table — Warm Kitchen palette (light + dark)
// ─────────────────────────────────────────────────────────────
export interface ColorTokens {
  bg: string;
  surface: string;
  primary: string;
  primaryDark: string;
  primaryTint: string;
  textPrimary: string;
  textSecondary: string;
  success: string;
  successTint: string;
  error: string;
  errorTint: string;
  border: string;
  shadow: string;
  btnShadow: string;
}

export interface TokenSet {
  light: ColorTokens;
  dark: ColorTokens;
}

export const ESR_TOKENS: TokenSet = {
  light: {
    bg: '#FFF8F0',
    surface: '#FFFFFF',
    primary: '#E07856',
    primaryDark: '#C96440',
    primaryTint: '#FCEFE6',
    textPrimary: '#2D241F',
    textSecondary: '#7A6B61',
    success: '#5B8C5A',
    successTint: '#E8F0E7',
    error: '#C5524A',
    errorTint: '#FBEAE8',
    border: '#EDE3D8',
    shadow: 'rgba(45, 36, 31, 0.08)',
    btnShadow: '0 4px 12px rgba(45, 36, 31, 0.16)',
  },
  dark: {
    bg: '#1F1A16',
    surface: '#2A2420',
    primary: '#E89579',
    primaryDark: '#D17A5C',
    primaryTint: '#3A2D25',
    textPrimary: '#F5EFE8',
    textSecondary: '#A89789',
    success: '#7FAE7E',
    successTint: '#2D3A2D',
    error: '#E07570',
    errorTint: '#3A2522',
    border: '#3D3530',
    shadow: 'rgba(0, 0, 0, 0.3)',
    btnShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
  },
};

// ─────────────────────────────────────────────────────────────
// Icons — Lucide-style 24px strokes
// ─────────────────────────────────────────────────────────────
export type EsrIconName =
  | 'home'
  | 'briefcase'
  | 'x-circle'
  | 'check'
  | 'check-bold'
  | 'alert-circle'
  | 'settings'
  | 'arrow-left'
  | 'whatsapp';

interface EsrIconProps {
  name: EsrIconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export function EsrIcon({ name, size = 24, color = 'currentColor', strokeWidth = 2 }: EsrIconProps): React.ReactElement | null {
  const props: React.SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  switch (name) {
    case 'home':
      return (<svg {...props}><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z" /></svg>);
    case 'briefcase':
      return (<svg {...props}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg>);
    case 'x-circle':
      return (<svg {...props}><circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" /></svg>);
    case 'check':
      return (<svg {...props}><polyline points="20 6 9 17 4 12" /></svg>);
    case 'check-bold':
      return (<svg {...props} strokeWidth={2.6}><polyline points="20 6 9 17 4 12" /></svg>);
    case 'alert-circle':
      return (<svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>);
    case 'settings':
      return (<svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8h0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg>);
    case 'arrow-left':
      return (<svg {...props}><path d="M19 12H5M12 19l-7-7 7-7" /></svg>);
    case 'whatsapp':
      return (<svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.2.3-.4.1-.2 0-.3 0-.4-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.8L2 22l5.3-1.4c1.4.7 3 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 15.1 3.7 13.6 3.7 12c0-4.6 3.7-8.3 8.3-8.3S20.3 7.4 20.3 12s-3.7 8.3-8.3 8.3z" /></svg>);
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────
// Date helper — render long-form Indonesian date for tomorrow
// ─────────────────────────────────────────────────────────────
const ESR_DAYS: string[] = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const ESR_MONTHS: string[] = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

export function esrTomorrow(base: Date = new Date()): string {
  const d = new Date(base.getTime() + 24 * 60 * 60 * 1000);
  return `Untuk ${ESR_DAYS[d.getDay()]}, ${d.getDate()} ${ESR_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// ─────────────────────────────────────────────────────────────
// Message template — consolidated WhatsApp body
// ─────────────────────────────────────────────────────────────
export type MealChoice = 'home' | 'office' | 'skip' | null;

export interface PersonSelections {
  lunch: MealChoice;
  dinner: MealChoice;
}

export interface Selections {
  koko: PersonSelections;
  dede: PersonSelections;
}

function esrLunchPhrase(v: MealChoice): string {
  if (v === 'home') return 'makan siang di rumah';
  if (v === 'office') return 'makan siang di kantor, tolong disiapkan bekalnya yah';
  return 'tidak makan siang, tidak perlu disiapkan';
}

function esrDinnerPhrase(v: MealChoice): string {
  if (v === 'home') return 'makan malam di rumah';
  return 'tidak makan malam di rumah, tidak perlu disiapkan';
}

export function esrBuildMessage(sel: Selections): string | null {
  const k = sel.koko;
  const d = sel.dede;
  const ok = k.lunch && k.dinner && d.lunch && d.dinner;
  if (!ok) return null;
  return `Selamat malam Mbak, untuk jadwal makan besok:\n\nKoko: ${esrLunchPhrase(k.lunch)}, dan ${esrDinnerPhrase(k.dinner)}.\n\nDede: ${esrLunchPhrase(d.lunch)}, dan ${esrDinnerPhrase(d.dinner)}.\n\nTerima kasih yah Mbak.`;
}

// ─────────────────────────────────────────────────────────────
// OptionButton — vertical-stack tap target
// ─────────────────────────────────────────────────────────────
interface EsrOptionButtonProps {
  icon: EsrIconName;
  label: string;
  selected: boolean;
  onTap: () => void;
  t: ColorTokens;
}

function EsrOptionButton({ icon, label, selected, onTap, t }: EsrOptionButtonProps): React.ReactElement {
  const [pressed, setPressed] = React.useState(false);
  const bg = selected ? t.primaryTint : t.surface;
  const borderColor = selected ? (pressed ? t.primaryDark : t.primary) : t.border;
  const borderWidth = selected ? 2 : 1;
  const iconColor = selected ? t.primary : t.textSecondary;
  return (
    <button
      type="button"
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onClick={onTap}
      style={{
        appearance: 'none',
        WebkitAppearance: 'none' as React.CSSProperties['WebkitAppearance'],
        width: '100%',
        height: 64,
        padding: '0 16px',
        background: bg,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        color: t.textPrimary,
        font: 'inherit',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'left' as const,
        transition: 'background-color 150ms ease-in-out, border-color 150ms ease-in-out, transform 100ms ease-out',
        transform: pressed ? 'scale(0.97)' : 'scale(1)',
        boxSizing: 'border-box' as const,
      }}
    >
      <EsrIcon name={icon} size={24} color={iconColor} />
      <span style={{ flex: 1 }}>{label}</span>
      {selected && (
        <span style={{ display: 'inline-flex', animation: 'esrCheckIn 200ms ease-out' }}>
          <EsrIcon name="check-bold" size={20} color={t.primary} />
        </span>
      )}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Person tabs — pill segmented control with completion dots
// ─────────────────────────────────────────────────────────────
type PersonId = 'koko' | 'dede';

interface EsrPersonTabsProps {
  active: PersonId;
  onChange: (id: PersonId) => void;
  kokoDone: boolean;
  dedeDone: boolean;
  t: ColorTokens;
}

function EsrPersonTabs({ active, onChange, kokoDone, dedeDone, t }: EsrPersonTabsProps): React.ReactElement {
  const tabs: { id: PersonId; label: string; done: boolean }[] = [
    { id: 'koko', label: 'Koko', done: kokoDone },
    { id: 'dede', label: 'Dede', done: dedeDone },
  ];
  return (
    <div style={{
      position: 'relative',
      height: 48,
      padding: 4,
      background: t.surface,
      border: `1px solid ${t.border}`,
      borderRadius: 999,
      display: 'flex',
      boxSizing: 'border-box',
    }}>
      <div style={{
        position: 'absolute',
        top: 4,
        bottom: 4,
        left: active === 'koko' ? 4 : 'calc(50% + 0px)',
        width: 'calc(50% - 4px)',
        background: t.primary,
        borderRadius: 999,
        transition: 'left 200ms ease-in-out',
        boxShadow: '0 1px 2px rgba(45,36,31,0.1)',
      }} />
      {tabs.map(tab => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            style={{
              flex: 1,
              position: 'relative',
              zIndex: 1,
              background: 'transparent',
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              color: isActive ? '#FFFFFF' : t.textSecondary,
              font: 'inherit',
              fontSize: isActive ? 16 : 15,
              fontWeight: isActive ? 600 : 500,
              transition: 'color 200ms ease-in-out, font-weight 200ms',
            }}
          >
            <span>{tab.label}</span>
            {tab.done && (
              <span style={{
                width: 8,
                height: 8,
                borderRadius: 8,
                background: isActive ? '#FFFFFF' : t.success,
                animation: 'esrDotIn 200ms ease-out',
                display: 'inline-block',
              }} />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Question group — header + stacked option buttons
// ─────────────────────────────────────────────────────────────
type QuestionType = 'lunch' | 'dinner';

interface EsrQuestionProps {
  q: QuestionType;
  person: PersonId;
  selections: Selections;
  onSelect: (person: PersonId, q: QuestionType, val: string) => void;
  t: ColorTokens;
}

function EsrQuestion({ q, person, selections, onSelect, t }: EsrQuestionProps): React.ReactElement {
  const sel = selections[person][q];
  const personName = person === 'koko' ? 'Koko' : 'Dede';
  const label = q === 'lunch'
    ? `Di mana ${personName} makan siang?`
    : `Di mana ${personName} makan malam?`;
  const opts: { id: string; label: string; icon: EsrIconName }[] = q === 'lunch'
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
    <div>
      <h2 style={{
        margin: '0 0 16px',
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1.4,
        color: t.textPrimary,
      }}>{label}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {opts.map(o => (
          <EsrOptionButton
            key={o.id}
            icon={o.icon}
            label={o.label}
            selected={sel === o.id}
            onTap={() => onSelect(person, q, o.id)}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Message preview card
// ─────────────────────────────────────────────────────────────
interface EsrPreviewProps {
  msg: string | null;
  t: ColorTokens;
}

function EsrPreview({ msg, t }: EsrPreviewProps): React.ReactElement | null {
  if (!msg) return null;
  return (
    <div style={{
      background: t.primaryTint,
      borderRadius: 12,
      padding: 16,
      margin: '24px 0 16px',
      animation: 'esrPreviewIn 250ms ease-out',
    }}>
      <div style={{
        fontSize: 12,
        fontWeight: 500,
        color: t.textSecondary,
        marginBottom: 8,
        letterSpacing: 0.1,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        <EsrIcon name="whatsapp" size={14} color={t.textSecondary} />
        <span>Pesan untuk Mbak:</span>
      </div>
      <div style={{
        fontSize: 14,
        lineHeight: 1.5,
        color: t.textPrimary,
        fontStyle: 'italic',
        whiteSpace: 'pre-line',
      }}>{msg}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Send button — handles disabled / enabled / loading / success
// ─────────────────────────────────────────────────────────────
type SendState = 'idle' | 'loading' | 'success';

interface EsrSendButtonProps {
  state: SendState;
  sel: Selections;
  onSend: () => void;
  t: ColorTokens;
}

function EsrSendButton({ state, sel, onSend, t }: EsrSendButtonProps): React.ReactElement {
  const kDone = sel.koko.lunch && sel.koko.dinner;
  const dDone = sel.dede.lunch && sel.dede.dinner;
  const bothDone = kDone && dDone;

  let label: React.ReactNode;
  let bg: string;
  let color: string;
  let disabled: boolean;
  let shadow: string;

  if (state === 'loading') {
    label = (
      <span style={{
        display: 'inline-block',
        width: 20,
        height: 20,
        border: '2.5px solid rgba(255,255,255,0.35)',
        borderTopColor: '#fff',
        borderRadius: '50%',
        animation: 'esrSpin 800ms linear infinite',
      }} />
    );
    bg = t.primary;
    color = '#fff';
    disabled = true;
    shadow = t.btnShadow;
  } else if (state === 'success') {
    label = (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <EsrIcon name="check-bold" size={20} color="#fff" />
        Terkirim
      </span>
    );
    bg = t.success;
    color = '#fff';
    disabled = true;
    shadow = t.btnShadow;
  } else if (!bothDone) {
    if (!sel.koko.lunch && !sel.koko.dinner && !sel.dede.lunch && !sel.dede.dinner) {
      label = 'Pilih opsi untuk Koko dan Dede';
    } else if (kDone && !dDone) {
      label = 'Lengkapi pilihan Dede dulu';
    } else if (dDone && !kDone) {
      label = 'Lengkapi pilihan Koko dulu';
    } else {
      label = 'Pilih opsi untuk Koko dan Dede';
    }
    bg = t.border;
    color = t.textSecondary;
    disabled = true;
    shadow = 'none';
  } else {
    label = (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        <EsrIcon name="whatsapp" size={20} color="#fff" />
        Kirim ke Mbak
      </span>
    );
    bg = t.primary;
    color = '#fff';
    disabled = false;
    shadow = t.btnShadow;
  }

  const [pressed, setPressed] = React.useState(false);
  return (
    <button
      type="button"
      disabled={disabled}
      onPointerDown={() => !disabled && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onClick={onSend}
      style={{
        appearance: 'none',
        WebkitAppearance: 'none' as React.CSSProperties['WebkitAppearance'],
        width: '100%',
        height: 56,
        background: pressed ? t.primaryDark : bg,
        color,
        border: 'none',
        borderRadius: 16,
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'inherit',
        cursor: disabled ? 'default' : 'pointer',
        boxShadow: shadow,
        marginTop: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 200ms ease-in-out, box-shadow 200ms ease-in-out',
      }}
    >{label}</button>
  );
}

// ─────────────────────────────────────────────────────────────
// Error banner
// ─────────────────────────────────────────────────────────────
interface EsrErrorBannerProps {
  onRetry: () => void;
  t: ColorTokens;
}

function EsrErrorBanner({ onRetry, t }: EsrErrorBannerProps): React.ReactElement {
  return (
    <div style={{
      background: t.errorTint,
      borderRadius: 12,
      padding: '12px 16px',
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      animation: 'esrPreviewIn 200ms ease-out',
    }}>
      <EsrIcon name="alert-circle" size={20} color={t.error} />
      <span style={{ flex: 1, color: t.error, fontSize: 14, lineHeight: 1.4 }}>
        Gagal mengirim. Coba lagi?
      </span>
      <button
        type="button"
        onClick={onRetry}
        style={{
          background: 'transparent',
          border: 'none',
          color: t.error,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'underline',
          cursor: 'pointer',
          font: 'inherit',
          padding: 0,
        }}
      >Coba Lagi</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main app
// ─────────────────────────────────────────────────────────────
export interface EatScheduleAppProps {
  dark?: boolean;
  initial?: Selections;
  initialTab?: PersonId;
  initialSendState?: SendState;
  lastSent?: string;
  onOpenSettings?: () => void;
  showError?: boolean;
  caption?: string;
  todayLabel?: string;
}

const DEFAULT_SELECTIONS: Selections = {
  koko: { lunch: null, dinner: null },
  dede: { lunch: null, dinner: null },
};

export function EatScheduleApp({
  dark = false,
  initial = DEFAULT_SELECTIONS,
  initialTab = 'koko',
  initialSendState = 'idle',
  lastSent = 'Kemarin 20:02',
  onOpenSettings,
  showError = false,
  caption,
  todayLabel,
}: EatScheduleAppProps): React.ReactElement {
  const t = dark ? ESR_TOKENS.dark : ESR_TOKENS.light;
  const [selections, setSelections] = React.useState<Selections>(initial);
  const [activeTab, setActiveTab] = React.useState<PersonId>(initialTab);
  const [sendState, setSendState] = React.useState<SendState>(initialSendState);
  const [hasError, setHasError] = React.useState(showError);
  const [lastSentLocal, setLastSentLocal] = React.useState(lastSent);

  React.useEffect(() => { setSelections(initial); }, [JSON.stringify(initial)]);
  React.useEffect(() => { setActiveTab(initialTab); }, [initialTab]);
  React.useEffect(() => { setSendState(initialSendState); }, [initialSendState]);
  React.useEffect(() => { setHasError(showError); }, [showError]);

  const select = (person: PersonId, q: QuestionType, val: string): void => {
    setSelections(s => ({
      ...s,
      [person]: { ...s[person], [q]: s[person][q] === val ? null : val },
    }));
    setHasError(false);
  };

  const message = esrBuildMessage(selections);

  const handleSend = (): void => {
    if (!message || sendState !== 'idle') return;
    setSendState('loading');
    setHasError(false);
    setTimeout(() => {
      setSendState('success');
      setLastSentLocal('Baru saja');
      setTimeout(() => {
        setSendState('idle');
        setSelections({ koko: { lunch: null, dinner: null }, dede: { lunch: null, dinner: null } });
      }, 2200);
    }, 900);
  };

  const handleRetry = (): void => {
    setHasError(false);
    handleSend();
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100%',
      background: t.bg,
      color: t.textPrimary,
      fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      padding: '56px 24px 40px',
      position: 'relative',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.3,
            color: t.textPrimary,
            letterSpacing: -0.2,
          }}>Jadwal Makan Besok</h1>
          <div style={{ marginTop: 4, fontSize: 14, color: t.textSecondary, lineHeight: 1.5 }}>
            {todayLabel || esrTomorrow()}
          </div>
        </div>
        <button
          type="button"
          aria-label="Pengaturan"
          onClick={onOpenSettings}
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: t.textSecondary,
            marginTop: -4,
          }}
        >
          <EsrIcon name="settings" size={22} color={t.textSecondary} />
        </button>
      </div>

      {/* divider */}
      <div style={{ height: 1, background: t.border, margin: '24px 0 24px' }} />

      {/* Person tabs */}
      <EsrPersonTabs
        active={activeTab}
        onChange={setActiveTab}
        kokoDone={!!(selections.koko.lunch && selections.koko.dinner)}
        dedeDone={!!(selections.dede.lunch && selections.dede.dinner)}
        t={t}
      />

      {/* Question groups */}
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <EsrQuestion q="lunch" person={activeTab} selections={selections} onSelect={select} t={t} />
        <EsrQuestion q="dinner" person={activeTab} selections={selections} onSelect={select} t={t} />
      </div>

      {/* Preview + send + footer */}
      <div style={{ marginTop: 8 }}>
        <EsrPreview msg={message} t={t} />
        <EsrSendButton state={sendState} sel={selections} onSend={handleSend} t={t} />
        {hasError && <EsrErrorBanner onRetry={handleRetry} t={t} />}
        {lastSentLocal && sendState !== 'success' && !hasError && (
          <div style={{
            marginTop: 16,
            textAlign: 'center',
            fontSize: 12,
            color: t.textSecondary,
          }}>Terakhir dikirim: {lastSentLocal}</div>
        )}
      </div>

      {caption && (
        <div style={{
          position: 'absolute',
          bottom: 12,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: 11,
          color: t.textSecondary,
          opacity: 0.6,
          pointerEvents: 'none',
        }}>{caption}</div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Keyframes injected once
// ─────────────────────────────────────────────────────────────
if (typeof document !== 'undefined' && !document.getElementById('esr-keyframes')) {
  const s = document.createElement('style');
  s.id = 'esr-keyframes';
  s.textContent = `
    @keyframes esrCheckIn { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    @keyframes esrDotIn { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    @keyframes esrPreviewIn { from { transform: translateY(8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes esrSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(s);
}

// ─────────────────────────────────────────────────────────────
// Window globals for backward compatibility
// ─────────────────────────────────────────────────────────────
declare global {
  interface Window {
    EatScheduleApp: typeof EatScheduleApp;
    EsrIcon: typeof EsrIcon;
    ESR_TOKENS: typeof ESR_TOKENS;
    esrTomorrow: typeof esrTomorrow;
    esrBuildMessage: typeof esrBuildMessage;
  }
}

Object.assign(window, {
  EatScheduleApp,
  EsrIcon,
  ESR_TOKENS,
  esrTomorrow,
  esrBuildMessage,
});
