const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    /**
     * Chế độ development (thực hiện một số ưu tiên riêng)
     * - build nhanh
     * - ít tối ưu hóa code, ít nén code
     * - không xóa bỏ các comment trong code
     * - cung cấp thêm thông tin lỗi và gợi ý
     * - cung cấp thêm khả năng debug tốt hơn
     */
    /**
     * Chế độ production
     * - chậm hơn
     * - tối ưu hóa code tốt hơn ở kết quả đầu ra. Kết quả là file javascript đầu ra có kích thước nhỏ hơn
     */
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
        another: './src/another-module.js'
    }, // File đầu vào
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'Development'
      })
    ],
    output: { // File đầu ra
        filename: '[name].bundle.js', // Tên file đầu ra
        path: path.resolve(__dirname, 'dist'), // Folder nơi chứa file đầu ra
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ]
    }
}