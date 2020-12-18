import { rest } from 'msw';
import { books } from './booksMock';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const handlers = [
  rest.get(`${SERVER_URL}/api/v1/items`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        books,
      })
    );
  }),
  rest.post(`${SERVER_URL}/api/v1/items`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        books,
      })
    );
  }),
  rest.delete(`${SERVER_URL}/api/v1/items`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        books,
      })
    );
  }),
  rest.put(`${SERVER_URL}/api/v1/items`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        books,
      })
    );
  }),
];
