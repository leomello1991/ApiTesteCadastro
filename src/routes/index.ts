import {Router} from 'express'

import usersRoute from './users.routes'

const routes = Router()

routes.use('/users', usersRoute)

export default routes