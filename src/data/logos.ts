// // Build a list of available SVG logos from src/assets/logos
// // Using Vite's import.meta.glob to keep imports clean and centralized
//
// const modules = import.meta.glob('../assets/logos/*.svg', {
//   eager: true,
//   // Vite v5 style: returns string URLs
//   query: '?url',
//   import: 'default',
// });
//
// type LogoItem = { name: string; logo: string };
//
// function toNiceName(filePath: string): string {
//   const base = filePath.split('/').pop() || '';
//   const withoutExt = base.replace(/\.[^.]+$/, '');
//   // strip trailing "-logo" or "logo" (case-insensitive)
//   const withoutLogo = withoutExt.replace(/-?logo$/i, '');
//   // normalize separators to spaces
//   const normalized = withoutLogo.replace(/[_-]+/g, ' ');
//   // insert space between camelCase words: GoogleAds -> Google Ads
//   const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
//   const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
//   // Title case each word
//   return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
// }
//
// export const logos: LogoItem[] = Object.entries(modules)
//   .map(([path, url]) => ({ name: toNiceName(path), logo: url as string }))
//   // Keep only a stable subset first (you can remove slice to include all)
//   .sort((a, b) => a.name.localeCompare(b.name));
//
// export type { LogoItem };
//
//

// Grab all SVGs from assets
const modules = import.meta.glob('../assets/logos/*.svg', {
    eager: true,
    query: '?url',
    import: 'default',
});

type LogoItem = { name: string; logo: string };

function toNiceName(filePath: string): string {
    const base = filePath.split('/').pop() || '';
    const withoutExt = base.replace(/\.[^.]+$/, '');
    const withoutLogo = withoutExt.replace(/-?logo$/i, '');
    const normalized = withoutLogo.replace(/[_-]+/g, ' ');
    const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
    const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
    return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

const selectedFilenames = [
    'Postgres-logo.svg',
    'SQL-logo.svg',
    'Python-logo.svg',
    'Astro-logo.svg',
    'Java-logo.svg',
    'C++-logo.svg',
    'Git-logo.svg',
    'Spring Boot-logo.svg',
    'OpenCV-logo.svg',
    'Mandarin-logo.svg',
    'Hugging Face-logo.svg'
];

// Build only that subset
export const logos: LogoItem[] = selectedFilenames.map((filename) => {
    const url = modules[`../assets/logos/${filename}`] as string;
    return { name: toNiceName(filename), logo: url };
});

export type { LogoItem };
