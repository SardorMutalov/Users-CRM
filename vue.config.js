module.export = {
    publicPath: process.env.NODE_ENV === 'production'
    // слещь для сервера, без слеша для локальной машины
    ? ''
    : '/',
    assetsDir: 'assets',
    productionSourceMap: false,
    filenameHashing: true // true по умолчанию

}