import { createContext, useContext, useMemo, useState } from "react";

const LocaleContext = createContext();
const LOCALE_KEY = "locale"; // 'id' | 'en'

const STRINGS = {
  id: {
    appName: "CatatanKu",
    login: "Masuk",
    register: "Daftar",
    logout: "Keluar",
    notes: "Catatan",
    archived: "Diarsipkan",
    newNote: "Catatan Baru",
    email: "Email",
    password: "Kata sandi",
    name: "Nama",
    confirm: "Konfirmasi",
    title: "Judul",
    body: "Isi catatan",
    create: "Buat",
    delete: "Hapus",
    archive: "Arsipkan",
    unarchive: "Batal Arsip",
    loading: "Memuat...",
    theme: "Tema",
    language: "Bahasa",
    light: "Terang",
    dark: "Gelap",
  },
  en: {
    appName: "MyNotes",
    login: "Login",
    register: "Register",
    logout: "Logout",
    notes: "Notes",
    archived: "Archived",
    newNote: "New Note",
    email: "Email",
    password: "Password",
    name: "Name",
    confirm: "Confirm",
    title: "Title",
    body: "Body",
    create: "Create",
    delete: "Delete",
    archive: "Archive",
    unarchive: "Unarchive",
    loading: "Loading...",
    theme: "Theme",
    language: "Language",
    light: "Light",
    dark: "Dark",
  },
};

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(
    () => localStorage.getItem(LOCALE_KEY) || "id"
  );
  const t = STRINGS[locale];
  const toggle = () => {
    const next = locale === "id" ? "en" : "id";
    setLocale(next);
    localStorage.setItem(LOCALE_KEY, next);
  };
  const value = useMemo(() => ({ locale, t, toggle }), [locale]);
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
