
getData = (req, res) => {
    const data ="Get data you need";
    res.status(200).send(data);
}

module.exports = {getData}