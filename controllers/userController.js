const jwt = require("jsonwebtoken");
const { connection } = require("../config/db.config");
const { jwt_secret } = require("../src/secret");

const userRegister = async (req, res) => {


    try {

        const { name, eid, email, position, gender, password } = req.body;

        await connection.promise().query("INSERT INTO users (name,eid,email,position,gender,password) VALUES (? , ? , ? , ?, ?, ?);", [name, eid, email, position, gender, password])
        res.json(
            { message: "Registered Successfully !!!" }
        )

    } catch (err) {
        res.json(
            { message: err.message }
        )
    }


}


const userLogin = async (req, res) => {
    try {
        const { eid, password } = req.body;

        const [rows] = await connection.promise().query("SELECT * FROM users WHERE eid = ?", [eid]);

        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found." });
        }

        const user = rows[0];


        if (password !== user.password) {
            return res.status(401).json({ message: "Incorrect password." });
        }

        const token = jwt.sign({ id: user.id, eid: user.eid }, jwt_secret, {
            expiresIn: '1h'
        });

        res.json({ token, message: "Login Successful !" });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Internal server error." });
    }
}



const userInfo = async (req, res) => {
    const [rows] = await connection.promise().query("SELECT id, name, eid, email, position, gender FROM users WHERE eid = ?", [req.eid]);
    const user = rows[0]

    res.json({
        success: true,
        user,
    })
}

module.exports = {
    userRegister,
    userLogin,
    userInfo,
}