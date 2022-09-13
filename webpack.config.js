

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name].js",
		library: 'hello-world-react-webpack',
		libraryTarget: "umd",
		libraryExport: 'default'
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				use: [
					"babel-loader"
				],
				exclude: '/node-modules/'
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
				]
			},
		]
	}
}
