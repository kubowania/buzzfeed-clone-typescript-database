import express, { Request, Response } from 'express'
import axios, { AxiosResponse } from 'axios'
import { QuizData } from './interfaces'
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = 8000
const app = express()

app.get('/quiz-item', async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const response: AxiosResponse = await axios.get(process.env.URL, {
            headers: {
                'X-Cassandra-Token': process.env.TOKEN,
                accept: 'application/json'
            }
        })
        if (response.status === 200) {
            const quizItem: QuizData = await response.data.data['20bef6ab-f035-4c99-9fcc-3cf19e13b70e']
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log('server is running on port ' + PORT))
