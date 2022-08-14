import { rest } from 'msw';
import { setupServer } from 'msw/node';
import endpoints from "../services/endpoints";
import { rooms } from './rooms';

export const server = setupServer(
    rest.get(endpoints.rooms, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(rooms))
    }),
);