import { setupWorker, rest } from "msw";
import dropDownListItems from './options';

const worker = setupWorker(
  rest.get('/api/options', (req, res, ctx) => res(ctx.json(dropDownListItems))),
)

worker.start();