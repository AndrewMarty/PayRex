import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./build`
const srcFolder = `./project`

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/media/`
	},
	src: {
		js: `${srcFolder}/src/js/app.js`,
		images: `${srcFolder}/public/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/public/img/**/*.svg`,
		scss: `${srcFolder}/src/styles/style.scss`,
		html: `${srcFolder}/public/*.pug`,
		files: `${srcFolder}/public/media/**/*.*`,
		svgicons: `${srcFolder}/public/svgicons/*.svg`
	},
	watch: {
		js: `${srcFolder}/src/**/*.js`,
		scss: `${srcFolder}/src/**/*.scss`,
		html: `${srcFolder}/**/*.pug`,
		images: `${srcFolder}/public/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `test`
}
