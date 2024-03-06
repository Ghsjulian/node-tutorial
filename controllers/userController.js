class users {
    async register(req, res) {
        const { name, email, password } = req.body;
        try {
            if (name && email && password) {
                if (email.includes("@") && email.includes(".com")) {
                    if (password.length >= 6) {
                        res.status(200).send({
                            status: "success",
                            data: req.body
                        });
                    } else {
                        res.status(403).send({
                            status: "failed",
                            message: "Password Must Be At 6 Characters"
                        });
                    }
                } else {
                    res.status(403).send({
                        status: "failed",
                        message: "Invalid Email Address"
                    });
                }
            } else {
                res.status(403).send({
                    status: "failed",
                    message: "All Fields Are Required"
                });
            }
        } catch (e) {
            res.status(403).send({
                status: "failed",
                message: "Something Went Wrong"
            });
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
        try {
            if (email && password) {
                if (email.includes("@") && email.includes(".com")) {
                    if (password.length >= 6) {
                        const isSql = `SELECT * FROM users WHERE user_email='${email}' AND user_password='${password}'`;
                        try {
                            conn.query(isSql, (err, row) => {
                                if (err) {
                                    res.status(403).send({
                                        status: "failed",
                                        message: "Something Error Occured"
                                    });
                                } else {
                                    if (row.length > 0) {
                                        if (
                                            row[0].user_email === email &&
                                            row[0].user_password === password
                                        ) {
                                            res.status(403).send({
                                                status: "success",
                                                message:
                                                    "User Logged In Successfully"
                                            });
                                        } else {
                                            res.status(403).send({
                                                status: "failed",
                                                message:
                                                    "Invalid User Email Or Password"
                                            });
                                        }
                                    } else {
                                        res.status(403).send({
                                            status: "failed",
                                            message: "User Doesn't Exist"
                                        });
                                    }
                                }
                            });
                        } catch (e) {
                            res.status(403).send({
                                status: "failed",
                                message: "Server Timeout, Please Try Again"
                            });
                        }
                    } else {
                        res.status(403).send({
                            status: "failed",
                            message: "Password Must Be At 6 Characters"
                        });
                    }
                } else {
                    res.status(403).send({
                        status: "failed",
                        message: "Invalid Email Address"
                    });
                }
            } else {
                res.status(403).send({
                    status: "failed",
                    message: "All Fields Are Required"
                });
            }
        } catch (e) {
            res.status(403).send({
                status: "failed",
                message: "Something Went Wrong"
            });
        }
    }
}

/*
 * description
 * Making Object And Exported For Use Its In Another Files
 */

let user = new users();
module.exports = user