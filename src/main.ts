import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';

if (environment.production) {
  enableProdMode();
}

Sentry.init({
  dsn: 'https://bc1bc9473ee34919b85f8316562b7219@o1346158.ingest.sentry.io/6623577',
  integrations: [
    new BrowserTracing({
      tracingOrigins: ['localhost', 'https://yourserver.io/api'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  tracesSampleRate: 1.0,
  debug: true,
  environment: environment.production ? 'production' : 'development',
});

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((success) => console.log(`Bootstrap success`))
  .catch((err) => console.error(err));
