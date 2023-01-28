module.exports = [
    /**
     * Index route
     */
    {
        endpoint: '/',
        router: require('./index/index.js')
    },
    {
        endpoint: '/api/drivingTests',
        router: require('./drivingTests')
    }
]
