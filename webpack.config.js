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
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        shared: 'lodash',
    }, // File đầu vào
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'Caching'
      })
    ],
    output: { // File đầu ra
        filename: '[name].[contenthash].js', // Tên file đầu ra
        path: path.resolve(__dirname, 'dist'), // Folder nơi chứa file đầu ra
        clean: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    }
}