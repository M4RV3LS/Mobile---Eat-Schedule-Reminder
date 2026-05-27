import React from 'react';
import { ESR_TOKENS, EsrIcon, type ColorTokens } from './eat-app';

// ─────────────────────────────────────────────────────────────
// Lock screen — iOS-style with banner notification
// ─────────────────────────────────────────────────────────────
interface EsrLockScreenProps {
  dark?: boolean;
}

export function EsrLockScreen({ dark = true }: EsrLockScreenProps): React.ReactElement {
  const wall = dark
    ? 'radial-gradient(at 25% 20%, #2D2218 0%, #1A1311 55%, #0E0A09 100%)'
    : 'radial-gradient(at 25% 20%, #F3D9C0 0%, #E9BC9C 55%, #C5876B 100%)';
  const fg = dark ? '#F5EFE8' : '#2D241F';
  const bannerBg = dark ? 'rgba(60, 50, 42, 0.55)' : 'rgba(255, 255, 255, 0.65)';
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: wall,
      color: fg,
      display: 'flex',
      flexDirection: 'column',
      padding: '72px 24px 32px',
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro", "Plus Jakarta Sans", system-ui, sans-serif',
      position: 'relative',
    }}>
      {/* clock */}
      <div style={{ textAlign: 'center', marginTop: 8 }}>
        <div style={{ fontSize: 22, fontWeight: 500, opacity: 0.85, letterSpacing: 0.5 }}>
          Rabu, 27 Mei
        </div>
        <div style={{
          fontSize: 96,
          fontWeight: 200,
          lineHeight: 1,
          marginTop: 4,
          letterSpacing: -3,
        }}>20:00</div>
      </div>

      {/* notifications stack */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 8 }}>
        {/* stacked older notif peeking behind */}
        <div style={{
          height: 10,
          margin: '0 12px',
          background: bannerBg,
          borderRadius: 18,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: 0.6,
        }} />
        {/* main notification */}
        <div style={{
          background: bannerBg,
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderRadius: 18,
          padding: '12px 14px',
          display: 'flex',
          gap: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          border: dark ? '0.5px solid rgba(255,255,255,0.08)' : '0.5px solid rgba(255,255,255,0.5)',
        }}>
          {/* app icon */}
          <div style={{
            width: 38,
            height: 38,
            flexShrink: 0,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #E07856 0%, #C96440 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF8F0',
            fontSize: 20,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 2v8a3 3 0 0 1-3 3v8M5 2v8a3 3 0 0 0 3 3M19 15V2a4 4 0 0 0-4 4v6a2 2 0 0 0 2 2h2v8" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 8,
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: -0.1 }}>JADWAL MAKAN</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>sekarang</div>
            </div>
            <div style={{
              marginTop: 2,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 1.3,
              letterSpacing: -0.1,
            }}>Waktunya atur jadwal makan besok 🍽️</div>
            <div style={{
              marginTop: 2,
              fontSize: 14,
              lineHeight: 1.35,
              opacity: 0.85,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden',
            }}>Tap untuk pilih jadwal makan Koko dan Dede besok.</div>
          </div>
        </div>

        {/* "swipe up" hint */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 12px 8px',
          opacity: 0.85,
        }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            background: bannerBg,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 18V4M5 11l7-7 7 7" /></svg>
          </div>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            background: bannerBg,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M21 12c-3 4-7 6-9 6s-6-2-9-6c3-4 7-6 9-6s6 2 9 6z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Setup screen — single secondary view, behind gear icon
// ─────────────────────────────────────────────────────────────
interface EsrSetupScreenProps {
  dark?: boolean;
  onBack?: () => void;
}

export function EsrSetupScreen({ dark = false, onBack }: EsrSetupScreenProps): React.ReactElement {
  const t: ColorTokens = ESR_TOKENS[dark ? 'dark' : 'light'];
  const [phone, setPhone] = React.useState('+62 812-3456-7890');
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: t.bg,
      color: t.textPrimary,
      padding: '56px 24px 24px',
      boxSizing: 'border-box',
      fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          type="button"
          onClick={onBack}
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
            color: t.textPrimary,
            marginLeft: -8,
          }}
        >
          <EsrIcon name="arrow-left" size={22} color={t.textPrimary} />
        </button>
        <h1 style={{
          margin: 0,
          fontSize: 20,
          fontWeight: 600,
          color: t.textPrimary,
        }}>Pengaturan</h1>
      </div>

      <div style={{ height: 1, background: t.border, margin: '24px 0' }} />

      {/* maid contact section */}
      <div>
        <div style={{
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 0.8,
          color: t.textSecondary,
          marginBottom: 12,
        }}>Kontak Mbak</div>
        <label style={{ display: 'block' }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: t.textPrimary, marginBottom: 8 }}>
            Nomor WhatsApp
          </div>
          <div style={{
            background: t.surface,
            border: `${focused ? 2 : 1}px solid ${focused ? t.primary : t.border}`,
            borderRadius: 16,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '0 16px',
            boxSizing: 'border-box',
          }}>
            <EsrIcon name="whatsapp" size={20} color={focused ? t.primary : t.textSecondary} />
            <input
              type="text"
              value={phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                color: t.textPrimary,
                fontSize: 16,
                fontWeight: 500,
                fontFamily: 'inherit',
              }}
            />
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: t.textSecondary, lineHeight: 1.5 }}>
            Pesan jadwal makan akan dikirim ke nomor ini setiap malam.
          </div>
        </label>
      </div>

      <div style={{ flex: 1 }} />

      {/* reminder time section — readonly preview */}
      <div style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: 16,
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: t.primaryTint,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: t.primary,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 500, color: t.textPrimary }}>Pengingat harian</div>
          <div style={{ fontSize: 12, color: t.textSecondary, marginTop: 2 }}>Setiap hari pukul 20:00 WIB</div>
        </div>
      </div>

      {/* save button */}
      <button
        type="button"
        style={{
          marginTop: 16,
          height: 56,
          width: '100%',
          background: t.primary,
          color: '#fff',
          border: 'none',
          borderRadius: 16,
          fontSize: 16,
          fontWeight: 600,
          fontFamily: 'inherit',
          cursor: 'pointer',
          boxShadow: t.btnShadow,
        }}
      >Simpan</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Window globals for backward compatibility
// ─────────────────────────────────────────────────────────────
declare global {
  interface Window {
    EsrLockScreen: typeof EsrLockScreen;
    EsrSetupScreen: typeof EsrSetupScreen;
  }
}

Object.assign(window, { EsrLockScreen, EsrSetupScreen });
