// module.exports = {
//     mongoURI: 'mongodb+srv://jakedoren:k2kRW#r2QksQLaY@cluster0.ogefg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// }

module.exports = {
    mongoURI: 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PW + '@cluster0.ogefg.mongodb.net/solaropposites?retryWrites=true&w=majority'
}
