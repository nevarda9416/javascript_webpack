const path = require('path');
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
        filename: 'main.js', // Tên file đầu ra
        path: path.resolve(__dirname, 'dist') // Folder nơi chứa file đầu ra
    }
}