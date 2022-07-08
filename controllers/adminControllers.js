
class AdminController {
    constructor() { }

    postLogin = async (req, res) => {
        const { email, password } = req.body;
        let errors = [];
        const sql1 = 'SELECT * FROM admin WHERE email = ?';
        const users = await queryParamPromise(sql1, [email]);
        if (
            users.length === 0 ||
            !(await bcrypt.compare(password, users[0].password))
        ) {
            errors.push({ msg: 'Email or Password is Incorrect' });
            res.status(401).render('Admin/login', { errors });
        }
        else{
            res.redirect('/admin/dashboard')
        }
    }
}

module.exports = AdminController