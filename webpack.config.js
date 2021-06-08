const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const config = {
	entry: {
		app: path.join(__dirname, 'src/Client/index.tsx')
	},
	mode: 'production',
	target: 'electron-main',
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		path: path.join(__dirname, 'Build/client'),
		filename: '[name].js'
	},
	performance: {
		maxEntrypointSize: 400000
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				],
				exclude: '/node_modules/'
			},
			{
				test: /\.(sass|scss)$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				],
				exclude: '/node_modules/'
			},
			{
				test: /\.svg$/i,
				use: ['svg-loader']
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin()]
	},
	plugins: [
		new HtmlwebpackPlugin({
			template: path.join(__dirname, 'src/Client/index.html')
		}),
		new MiniCssExtractPlugin()
	]
}

module.exports = config
