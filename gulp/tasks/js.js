import webpack from 'webpack-stream'
import gulpEslint from 'gulp-eslint'
export const js = () => {
	return (
		app.gulp
			.src(app.path.src.js, { sourcemaps: app.isDev })
			.pipe(app.plugins.replace(/@components\//g, '../components/'))
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: 'JS',
						message: 'Error: <%= error.message %>'
					})
				)
			)
			// .pipe(gulpEslint())
			// .pipe(gulpEslint.format())
			.pipe(
				webpack(
					{
						mode: app.isBuild ? 'production' : 'development',
						entry: './project/src/js/app.js',
						output: {
							filename: 'app.min.js'
						},
						module: {
							rules: [
								{
									test: /\.js$/,
									exclude: /node_modules/,
									use: {
										loader: 'babel-loader'
									}
								}
							]
						}
					}
					// {
					// 	mode: app.isBuild ? 'production' : 'development',
					// 	output: {
					// 		filename: 'app.min.js'
					// 	}
					// }
				)
			)
			.pipe(app.gulp.dest(app.path.build.js))
			.pipe(app.plugins.browsersync.stream())
	)
}
