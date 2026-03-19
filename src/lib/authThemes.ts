// ─── Auth Theme Definitions ───────────────────────────────────────────────────

export type ThemeKey = 'dark' | 'light' | 'simple';

export interface ThemePreview {
  wrapper: string;
  card: string;
  heading: string;
  muted: string;
  input: string;
  inputText: string;
  inputPlaceholder: string;
  divider: string;
  button: string;
  buttonText: string;
  socialBtn: string;
  socialText: string;
  link: string;
  logo: string;
}

export interface AuthTheme {
  label: string;
  preview: ThemePreview;
}

export const themes: Record<ThemeKey, AuthTheme> = {
  dark: {
    label: 'Dark',
    preview: {
      wrapper: 'bg-[#0d1117]',
      card: 'bg-[#161b27] border border-[#21293a]',
      heading: 'text-white',
      muted: 'text-[#8b92a5]',
      input: 'bg-[#0d1117] border border-[#21293a] text-white placeholder:text-[#4a5168]',
      inputText: 'text-white',
      inputPlaceholder: 'text-[#4a5168]',
      divider: 'border-[#21293a] text-[#4a5168]',
      button: 'bg-[#0077a8] hover:bg-[#0091cc] text-white',
      buttonText: 'text-white',
      socialBtn: 'bg-[#1e2535] border border-[#21293a] text-[#c9d1e0]',
      socialText: 'text-[#c9d1e0]',
      link: 'text-[#0077a8]',
      logo: 'bg-[#0077a8]/20 text-[#0077a8]',
    },
  },
  light: {
    label: 'Light',
    preview: {
      wrapper: 'bg-[#f4f6f9]',
      card: 'bg-white border border-gray-200 shadow-sm',
      heading: 'text-gray-900',
      muted: 'text-gray-500',
      input: 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400',
      inputText: 'text-gray-900',
      inputPlaceholder: 'text-gray-400',
      divider: 'border-gray-200 text-gray-400',
      button: 'bg-[#0077a8] hover:bg-[#0091cc] text-white',
      buttonText: 'text-white',
      socialBtn: 'bg-white border border-gray-200 text-gray-700',
      socialText: 'text-gray-700',
      link: 'text-[#0077a8]',
      logo: 'bg-[#0077a8]/10 text-[#0077a8]',
    },
  },
  simple: {
    label: 'Simple',
    preview: {
      wrapper: 'bg-white',
      card: 'bg-white border-0 shadow-none',
      heading: 'text-gray-900',
      muted: 'text-gray-400',
      input: 'bg-white border border-gray-300 text-gray-900 placeholder:text-gray-300',
      inputText: 'text-gray-900',
      inputPlaceholder: 'text-gray-300',
      divider: 'border-gray-200 text-gray-300',
      button: 'bg-gray-900 text-white',
      buttonText: 'text-white',
      socialBtn: 'bg-white border border-gray-300 text-gray-600',
      socialText: 'text-gray-600',
      link: 'text-gray-900 underline',
      logo: 'bg-gray-100 text-gray-700',
    },
  },
};
