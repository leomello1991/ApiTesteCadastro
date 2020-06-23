import {Router} from 'express'

import usersRoute from './users.routes'
import sessionsRouter from './sessions.routes';

const routes = Router()

routes.use('/users', usersRoute)
routes.use('/sessions', sessionsRouter);

export default routes