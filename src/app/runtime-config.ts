export interface RuntimeConfig {
  API_URL: string;
}

declare global {
  interface Window {
    __env?: RuntimeConfig;
  }
}

export async function loadRuntimeConfig(): Promise<RuntimeConfig> {
  try {
    // runtime config is expected at the webroot: /runtime-config.json (placed in `public/` so it's copied to dist)
    const resp = await fetch('/runtime-config.json', { cache: 'no-store' });
    if (!resp.ok) {
      throw new Error('Failed to load runtime config');
    }
    const cfg = (await resp.json()) as RuntimeConfig;
    window.__env = cfg;
    return cfg;
  } catch (e) {
    // fallback to existing window.__env or defaults
    const fallback: RuntimeConfig = {
      API_URL: (window.__env && window.__env.API_URL) || 'http://localhost:8080/api/refink/buyer',
    };
    window.__env = fallback;
    return fallback;
  }
}

export function getApiUrl(): string {
  return window.__env?.API_URL ?? 'http://localhost:8080/api/refink/buyer';
}
