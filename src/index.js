import express,{json} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { serverResponse } from './utils'
import apiRoutes from './routes'
import { dbURL } from './utils/config'


const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(helmet())
app.use(json())

app.use('/api/v1', apiRoutes)
app.use('/v1', apiRoutes)

app.get('/incredible', (req, res) => {
	res.json({
		name:"MRIncredible"
	})
})

app.listen(9090, () => {
	console.log('Server is running on port 9090')
})