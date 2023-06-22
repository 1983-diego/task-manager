const notFound = (req, res) => {
    return res.status(404).send(
        `<h1 align='center'>Page not found</h1>`
    )
}

module.exports = notFound