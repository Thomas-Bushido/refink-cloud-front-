import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { loadRuntimeConfig } from './app/runtime-config';

// Load runtime configuration (assets/runtime-config.json) before bootstrapping
loadRuntimeConfig()
  .then(() => bootstrapApplication(App, appConfig))
  .catch((err) => {
    console.error('Failed to load runtime config', err);
    return bootstrapApplication(App, appConfig).catch((e) => console.error(e));
  });
