import { setupWorker, rest } from "msw";
import dropDownListItems from './options';
import rooms from './rooms';
import endpoints from "../services/endpoints";

const worker = setupWorker(
  rest.get(endpoints.options, (req, res, ctx) => res(ctx.json(dropDownListItems))),
  rest.get(endpoints.rooms, (req, res, ctx) => res(ctx.json(rooms))),
  rest.get(endpoints.room200, (req, res, ctx) => res(ctx.json(rooms[0]))),
  rest.get(endpoints.room201, (req, res, ctx) => res(ctx.json(rooms[1]))),
  rest.get(endpoints.room202, (req, res, ctx) => res(ctx.json(rooms[2]))),
  rest.get(endpoints.room203, (req, res, ctx) => res(ctx.json(rooms[3]))),
)

worker.start();