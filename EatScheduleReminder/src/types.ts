export type MealChoice = 'home' | 'office' | 'skip' | null;

export interface PersonSelections {
  lunch: MealChoice;
  dinner: MealChoice;
}

export interface Selections {
  koko: PersonSelections;
  dede: PersonSelections;
}

export type PersonId = 'koko' | 'dede';
export type QuestionType = 'lunch' | 'dinner';
export type SendState = 'idle' | 'loading' | 'success';

export type EsrIconName =
  | 'home'
  | 'briefcase'
  | 'x-circle'
  | 'check'
  | 'check-bold'
  | 'alert-circle'
  | 'settings'
  | 'arrow-left'
  | 'whatsapp'
  | 'clock'
  | 'sun'
  | 'moon'
  | 'bell'
  | 'chevron-up'
  | 'chevron-down';

export const DEFAULT_SELECTIONS: Selections = {
  koko: { lunch: null, dinner: null },
  dede: { lunch: null, dinner: null },
};
