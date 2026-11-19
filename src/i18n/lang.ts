export const LANGS = ['en', 'sv', 'de', 'es', 'la', 'zh'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'zh';

/** Each language's name in its own language (for the switcher). */
export const LANG_NATIVE: Record<Lang, string> = { en: 'English', sv: 'Svenska', de: 'Deutsch', es: 'Español', la: 'Latina', zh: '简体中文' };

export const isLang = (v: unknown): v is Lang => (LANGS as readonly unknown[]).includes(v);
