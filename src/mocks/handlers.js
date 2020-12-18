import { rest } from 'msw';
import { phones } from './phonesMock';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const handlers = [
  rest.get(`${SERVER_URL}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        data: phones,
      })
    );
  }),
  rest.get(`${SERVER_URL}/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        phone: phones[req.params.id],
      })
    );
  }),
  rest.delete(`${SERVER_URL}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000));
  }),
  rest.put(`${SERVER_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        phone: req.body.phone,
      })
    );
  }),
];
