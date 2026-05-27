import type { MealChoice, Selections } from './types';

const ESR_DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const ESR_MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

export function esrTomorrow(base: Date = new Date()): string {
  const d = new Date(base.getTime() + 24 * 60 * 60 * 1000);
  return `Untuk ${ESR_DAYS[d.getDay()]}, ${d.getDate()} ${ESR_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
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
  if (!k.lunch || !k.dinner || !d.lunch || !d.dinner) return null;
  return (
    `Selamat malam Mbak, untuk jadwal makan besok:\n\n` +
    `Koko: ${esrLunchPhrase(k.lunch)}, dan ${esrDinnerPhrase(k.dinner)}.\n\n` +
    `Dede: ${esrLunchPhrase(d.lunch)}, dan ${esrDinnerPhrase(d.dinner)}.\n\n` +
    `Terima kasih yah Mbak.`
  );
}

export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\D/g, '');
}
