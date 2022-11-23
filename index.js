const express = require('express')
const app1 = express()
const app2 = express()
const app3 = express()

const handler = num => (req, res) => {
    const { method, url, headers, body } = req
    res.send('Response from server ' + num)
}

app1.get('*', handler(1)).post('*', handler(1))
app2.get('*', handler(2)).post('*', handler(2))
app3.get('*', handler(3)).post('*', handler(3))

app1.listen(3000, (res) => {
    console.log('Application Server listen at PORT 3000')
})

app2.listen(3001, (res) => {
    console.log('Application Server listen at PORT 3001')
})

app3.listen(3002, (res) => {
    console.log('Application Server listen at PORT 3002')
})