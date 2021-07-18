const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');
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
    mode: 'production',
    entry: './src/index.js', // File đầu vào
    output: { // File đầu ra
        filename: 'bundle.js', // Tên file đầu ra
        path: path.resolve(__dirname, 'dist') // Folder nơi chứa file đầu ra
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
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse
                }
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse
                }
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            },
        ]
    }
}