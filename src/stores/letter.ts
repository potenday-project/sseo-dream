import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type UserSelectionResult = {
  contentDescription: string;
  purpose: '개인' | '업무' | 'none';
  recipientCategory: string;
  recipientName: string;
  senderName: string;
  sentenceLength: number;
  type: string;
};

type GeneratedLetterContent = {
  content: string;
  isActive: boolean;
};

const INITIAL_USER_SELECTION_RESULT: UserSelectionResult = {
  contentDescription: '',
  purpose: 'none',
  recipientCategory: '',
  recipientName: '',
  senderName: '',
  sentenceLength: 0,
  type: '',
};

const INITIAL_GENERATED_LETTER_CONTENTS: GeneratedLetterContent[] = [
  {
    content: '첫번째 글',
    isActive: true,
  },
];

const INITIAL_STATE = {
  userSelectionResult: INITIAL_USER_SELECTION_RESULT,
  generatedLetterContents: INITIAL_GENERATED_LETTER_CONTENTS,
};

export type LetterState = {
  userSelectionResult: UserSelectionResult;
  generatedLetterContents: GeneratedLetterContent[];
};

export type LetterAction = {
  setUserSelectionResult: (userSelectionResult: UserSelectionResult) => void;
  setGeneratedLetterContents: (generatedLetterContents: GeneratedLetterContent[]) => void;
  resetLetterStore: () => void;
};

export const useLetterStore = create<LetterState & LetterAction, [['zustand/devtools', never]]>(
  devtools((set) => ({
    ...INITIAL_STATE,
    setUserSelectionResult: (userSelectionResult) => {
      set((state) => ({ ...state, userSelectionResult }));
    },
    setGeneratedLetterContents: (generatedLetterContents) => {
      set((state) => ({
        ...state,
        generatedLetterContents,
      }));
    },
    resetGeneratedLetterContents: () => {
      set((state) => ({
        ...state,
        generatedLetterContents: INITIAL_GENERATED_LETTER_CONTENTS,
      }));
    },
    resetLetterStore: () => {
      set((state) => ({
        ...state,
        ...INITIAL_STATE,
      }));
    },
  })),
);
