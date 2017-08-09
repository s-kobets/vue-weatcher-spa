const webpackConfig = require('./webpack.config.js');
delete webpackConfig.entry

// karma.conf.js
module.exports = function (config) {
	config.set({
		browsers: ['PhantomJS'],
		frameworks: ['jasmine'],
		// это файл точки входа для всех наших тестов.
		files: ['test/index.js'],
		// передаем файл точки входа в webpack для сборки.
		preprocessors: {
			'test/index.js': ['webpack']
		},
		// используем конфигурацию webpack
		webpack: webpackConfig,
		// избегаем стены бесполезного текста
		webpackMiddleware: {
			noInfo: true
		},
		singleRun: true
	});
}