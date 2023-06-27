import { Application } from 'express';
import authRouter from './auth';
import adminRouter from './admin';
import courseRouter from './course';
import { RedisClient } from '../../../app';
import jwtAuthMiddleware from '../middlewares/userAuth';
import { adminRoleCheckMiddleware } from '../middlewares/roleCheckMiddleware';
import refreshRouter from './refresh';

const routes = (app: Application, redisClient: RedisClient) => {
  app.use('/api/auth', authRouter());
  app.use('/api/all/refresh-tokens',refreshRouter())
  app.use('/api/admin',jwtAuthMiddleware,adminRoleCheckMiddleware,adminRouter());
  app.use('/api/courses',jwtAuthMiddleware,courseRouter())
};

export default routes;
