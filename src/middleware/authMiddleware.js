const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        // Kiểm tra nếu không có token
        if (!req.headers.token) {
            return res.status(401).json({
                message: "Không có token hoặc token không hợp lệ",
                status: "Error",
            });
        }

        // Lấy token từ headers
        const token = req.headers.token.split(" ")[1];

        // Kiểm tra nếu token bị thiếu sau Bearer
        if (!token) {
            return res.status(401).json({
                message: "Token bị thiếu hoặc không hợp lệ",
                status: "Error",
            });
        }

        // Xác thực token
        jwt.verify(token, "access_token", (err, user) => {
            if (err) {
                return res.status(403).json({
                    message: "Token không hợp lệ hoặc đã hết hạn",
                    status: "Error",
                });
            }

            req.user = user; // Gán user đã xác thực vào request
            next();
        });
    } catch (error) {
        res.status(500).json({
            message: "Lỗi server khi xác thực token",
            status: "Error",
            error: error.message,
        });
    }
};

module.exports = { authMiddleware };
