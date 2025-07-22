import express from "express";

const app = express();
const port = 3000;

// URLs hardcodeadas para rotar
const requestUris = [
  "https://universal-sharing.trial.procivis-one.com/app-link/openid4vp?client_id=https%3A%2F%2Fcore.trial.procivis-one.com%2Fssi%2Fopenid4vp%2Fdraft-20%2Fresponse&client_id_scheme=verifier_attestation&request_uri=https%3A%2F%2Fcore.trial.procivis-one.com%2Fssi%2Fopenid4vp%2Fdraft-20%2F0b39f014-edaa-4af6-b1dd-5387d3ef29c7%2Fclient-request",
  "https://universal-sharing.trial.procivis-one.com/app-link/openid4vp?client_id=https%3A%2F%2Fcore.trial.procivis-one.com%2Fssi%2Fopenid4vp%2Fdraft-20%2Fresponse&client_id_scheme=verifier_attestation&request_uri=https%3A%2F%2Fcore.trial.procivis-one.com%2Fssi%2Fopenid4vp%2Fdraft-20%2Fb05a6253-a33e-43c7-b73a-45b3841503e8%2Fclient-request",
  "https://core.trial.procivis-one.com/ssi/openid4vp/draft-20/ccc333/client-request"
];

let counter = 0;

app.get("/request", (_req: any, res: any) => {
  const uri = requestUris[counter % requestUris.length];
  counter++;
  // Redirige a la URL actual
  res.redirect(uri);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
