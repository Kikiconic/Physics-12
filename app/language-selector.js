"use client";

const publishedSite = "https://kikiconic.github.io/Physics-12";

export default function LanguageSelector() {
  const changeLanguage = event => {
    const language = event.target.value;
    if (language === "en") return;

    const current = new URL(window.location.href);
    const sourceUrl = current.hostname === "localhost" || current.hostname === "127.0.0.1"
      ? `${publishedSite}${current.pathname}${current.search}${current.hash}`
      : current.href;
    const translatedUrl = new URL("https://translate.google.com/translate");
    translatedUrl.searchParams.set("sl", "en");
    translatedUrl.searchParams.set("tl", language);
    translatedUrl.searchParams.set("u", sourceUrl);
    window.location.assign(translatedUrl.toString());
  };

  return (
    <label className="language-selector">
      <span aria-hidden="true">◎</span>
      <span className="sr-only">Website language</span>
      <select defaultValue="en" onChange={changeLanguage} aria-label="Choose website language">
        <option value="en">English</option>
        <option value="zh-CN">Mandarin</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </label>
  );
}
