const express = require('express')
const axios = require('axios')

const app = express()

const servers = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002"
]

const countRequests = [0, 0, 0]

let current = 0

const handler = async(req, res) => {
    const { method, url, headers, body } = req

    // Get Current Server
    const server = servers[current]

    countRequests[current]++;

    current === (servers.length - 1) ? current = 0 : current++;

    console.log(`Server ${server}`)

    try {
        // Promise.all()
        const request = await axios({
            url: `${server}`,
            method: method,
            headers: headers,
            body: body,
        })

        // Return response
        // res.json(request.data)
    } catch (err) {
        res.status(500).send("Server Error!")
    }
}

app.use((req, res) => { handler(req, res) })

app.listen(8080, () => {
    console.log('Server listen at PORT 8080')
})