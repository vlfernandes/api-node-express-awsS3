module.exports = (err, data) => {
    if (err) {
        console.log(err, err.stack);
    }
    else {
        console.log(data);
    }
}
