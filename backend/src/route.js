import { Router } from 'express'
import UserRouter from './routes/user.js'
import HealthRouter from './routes/health.js'

const AppRouter = Router()

AppRouter.use('/users', UserRouter)
AppRouter.use('/health', HealthRouter)

export default AppRouter


