import { setupWorker, rest } from "msw";
import dropDownListItems from './options';
import rooms from './rooms';

const worker = setupWorker(
  rest.get('/api/options', (req, res, ctx) => res(ctx.json(dropDownListItems))),
  rest.get('/api/rooms', (req, res, ctx) => res(ctx.json(rooms))),
  rest.get('/api/rooms/200', (req, res, ctx) => res(ctx.json(rooms[0]))),
  rest.get('/api/rooms/201', (req, res, ctx) => res(ctx.json(rooms[1]))),
  rest.get('/api/rooms/202', (req, res, ctx) => res(ctx.json(rooms[2]))),
  rest.get('/api/rooms/203', (req, res, ctx) => res(ctx.json(rooms[3]))),
)

worker.start();