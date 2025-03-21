import { Router } from 'express'
import { DbHealth, serverHealth } from '../controller/health.js'

const HealthRouter = Router()


HealthRouter.get('/server', serverHealth)
HealthRouter.get('/db', DbHealth)


export default HealthRouter

