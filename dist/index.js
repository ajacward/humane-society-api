/**
 * @fileoverview Entry point to humane society api
 */
import * as fs from 'node:fs/promises';
import * as https from 'node:https';
import express from 'express';
import { router as adopterRouter } from './adopters/adopter_routes.js';
import { router as petRouter } from './pets/pet_routes.js';
/**
 * Allows server to listen over https
 * @param app
 */
async function runHttps(app) {
    if (process.env['IDENTITY_PATH'] && process.env['TRUST_PATH']) {
        try {
            const identityValue = await fs.readFile(process.env['IDENTITY_PATH'], { encoding: 'utf8' });
            const trustValue = await fs.readFile(process.env['TRUST_PATH'], { encoding: 'utf8' });
            const options = {
                key: identityValue,
                cert: trustValue,
            };
            const HTTPS_PORT = process.env['HTTPS_PORT'] || 3080;
            https.createServer(options, app)
                .listen(HTTPS_PORT, () => { console.log(`API is listening on port ${HTTPS_PORT}`); });
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }
}
/**
 * Entry point to api
 */
function main() {
    const app = express();
    app.use(express.json());
    app.use('/api/adopters', adopterRouter);
    app.use('/api/pets', petRouter);
    const HTTP_PORT = process.env['HTTP_PORT'] || 3000;
    // The server is set to listen on two different ports
    // Remove this app.listen call if no need for http unsecure
    app.listen(HTTP_PORT, () => { console.log(`API is listening on port ${HTTP_PORT}`); });
    runHttps(app);
}
main();
//# sourceMappingURL=index.js.map