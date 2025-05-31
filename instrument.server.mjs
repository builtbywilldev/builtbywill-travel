import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://e8c59b35341c80bb1b00a5a81654be43@o4509398173220864.ingest.us.sentry.io/4509398178922496",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
