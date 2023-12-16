import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import extractNonEmptyValues from '../utils/extractNonEmptyValues';

export type UserSelectionResult = {
  contentDescription: string;
  purpose: '개인' | '업무' | 'none';
  recipientCategory: string;
  recipientName: string;
  senderName: string;
  letterSentence: '짧은 글' | '중간 글' | '긴 글' | '';
  type: string;
};

type GeneratedLetterContent = {
  content: string;
  isActive: boolean;
};

export type EtcShown = {
  type: boolean;
  recipientCategory: boolean;
  letterSentence: boolean;
};

const INITIAL_USER_SELECTION_RESULT: UserSelectionResult = {
  purpose: 'none',
  type: '',
  recipientCategory: '',
  recipientName: '',
  senderName: '',
  contentDescription: '',
  letterSentence: '',
};

const INITIAL_GENERATED_LETTER_CONTENTS: GeneratedLetterContent[] = [
  {
    content: '첫번째 글',
    isActive: true,
  },
];

const INITIAL_ETC_SHOWN: EtcShown = {
  type: false,
  recipientCategory: false,
  letterSentence: false,
};

const INITIAL_STATE = {
  userSelectionResult: INITIAL_USER_SELECTION_RESULT,
  generatedLetterContents: INITIAL_GENERATED_LETTER_CONTENTS,
  etcShown: INITIAL_ETC_SHOWN,
  headerTags: [],
};

export type LetterState = {
  userSelectionResult: UserSelectionResult;
  generatedLetterContents: GeneratedLetterContent[];
  etcShown: EtcShown;
  headerTags: Array<string | number>;
};

export type LetterAction = {
  setUserSelectionResult: (userSelectionResult: UserSelectionResult) => void;
  setGeneratedLetterContents: (generatedLetterContents: GeneratedLetterContent[]) => void;
  resetLetterStore: () => void;
  setEtcShown: (etcShown: EtcShown) => void;
  resetEtcShown: () => void;
  setHeaderTags: () => void;
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
    setEtcShown: (etcShown) => {
      set((state) => ({
        ...state,
        etcShown,
      }));
    },
    resetEtcShown: () => {
      set((state) => ({
        ...state,
        etcShown: INITIAL_ETC_SHOWN,
      }));
    },
    setHeaderTags: () => {
      set((state) => {
        const values = extractNonEmptyValues(state.userSelectionResult);

        return {
          ...state,
          headerTags: values,
        };
      });
    },
  })),
);
