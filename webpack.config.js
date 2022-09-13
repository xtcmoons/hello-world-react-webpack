

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name].js",
		library: {
			name: "hello-world-react-webpack",
			type: "umd"
		},
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
