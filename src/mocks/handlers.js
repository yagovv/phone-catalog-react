import { rest } from 'msw';
import { phones } from './phonesMock';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const handlers = [
  rest.get(`${SERVER_URL}/api/v1/items`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        phones,
      })
    );
  }),
  rest.get(`${SERVER_URL}/api/v1/items/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        phone: phones[req.params.id],
      })
    );
  }),
  rest.delete(`${SERVER_URL}/api/v1/items`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000));
  }),
  rest.put(`${SERVER_URL}/api/v1/items`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        phone: phones[req.params.id],
      })
    );
  }),
];
