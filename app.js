const path = require('path');
const env = require('dotenv');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));
app.get("/error403", (req, res) => {
    res.render("error403")
})
app.get("/error404", (req, res) => {
    res.render("error404")
})
app.get("/", (req, res) => {
    res.render("landing")
})
app.get("/index", (req, res) => {
    res.render("index")
})

// routes
const adminRoutes = require("./routes/adminRoutes")
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin",adminRoutes)

app.get("/admin/login", (req, res) => {
    res.render("Admin/login")
})
app.get("/admin/dashboard", (req, res) => {
    res.render("Admin/dashboard", { user: 'Brajesh Mishra', page_name: 'overview' })
})
app.get("/admin/addClass", (req, res) => {
    res.render("Admin/Class/addClass", { page_name: 'classes', courses: [], staffs: [] })
})
app.get("/admin/getClass", (req, res) => {
    res.render("Admin/Class/getClass", {
        data: [],
        staffData: [],
        page_name: 'classes',
    })
})
app.get("/admin/setClass", (req, res) => {
    res.render("Admin/Class/setClass", {
        classData: [],
        courseData: [],
        staffData: [],
        staffEmail: [],
        page_name: 'classes',
    })
})
app.get("/admin/addStudent", (req, res) => {
    res.render("Admin/Student/addStudent", {
        departments: [],
        page_name: 'courses',
    })
})
app.get("/admin/getStudent", (req, res) => {
    res.render("Admin/Student/getStudent", {
        data: [],
        page_name: 'students',
    })
})
app.get("/admin/setStudent", (req, res) => {
    res.render("Admin/Student/setStudent", {
        studentData: [],
        departments: [],
        page_name: 'students',
    })
})
app.get("/admin/student/deptSelect", (req, res) => {
    res.render('Admin/Student/deptSelect', {
        departments: [],
        page_name: 'students',
    });
})
app.get("/admin/addCourse", (req, res) => {
    res.render('Admin/Course/addCourse', {
        departments: [],
        page_name: 'courses',
    });
})
app.get("/admin/course/deptSelect", (req, res) => {
    res.render('Admin/Course/deptSelect', {
        departments: [],
        page_name: 'students',
    });
})
app.get("/admin/getCourse", (req, res) => {
    res.render('Admin/Course/getCourse', {
        data: [],
        page_name: 'courses',
    });
})
app.get("/admin/setCourse", (req, res) => {
    res.render('Admin/Course/getCourse', {
        courseData: [],
        page_name: 'courses',
        departments: []
    });
})
app.get("/admin/addDept", (req, res) => {
    res.render('Admin/Department/addDept', {
        page_name: 'depts',
    });
})
app.get("/admin/setDept", (req, res) => {
   
   
    res.render('Admin/Department/setDept', {
        name: "",
        id: "",
        page_name: 'depts',
    });
})
app.get("/admin/getDept", (req, res) => {
    res.render('Admin/Department/getDept', {
        data: [],
        id: "",
        page_name: 'depts',
    });
})
app.get("/admin/addStaff", (req, res) => {
    res.render('Admin/Staff/addStaff', {
        departments: [],
        page_name: 'staff',
    });
})
app.get("/admin/setStaff", (req, res) => {
    res.render('Admin/Staff/setStaff', {
        staffData: [],
        departments: [],
        page_name: 'Staff Settings',
    });
})

app.get("/admin/getStaff", (req, res) => {
    const data = [
        { email: "brajeshmishra825@gmail.com", st_name: "Brajesh Mishra", dept_id: 10 }, { email: "sk4903410@gmail.com", st_name: "Shivam Kumar", dept_id: 10 }
    ]

    res.render('Admin/Staff/getStaff', {
        data: data,
        page_name: 'staff',
    });
})
app.get("/admin/selectStaff", (req, res) => {
    res.render('Admin/Staff/selectStaff', {
        departments: [],
        page_name: 'staff',
    });
})
app.get("/admin/forgot-Password", (req, res) => {
    res.render('Admin/forgotPassword');
})

app.get("/admin/password_settings", (req, res) => {
    res.render('Admin/passwordSettings', {
        page_name: 'overview'
    });
})
app.get("/admin/profile", (req, res) => {
    res.render('Admin/profile', {
        user: "",
        students: [],
        staffs: [],
        departments: [],
        courses: [],
        classes: [],
        page_name: 'profile',
    });
})
app.get("/admin/info_settings", (req, res) => {
    res.render('Admin/infoSettings', {
        user: "",
        page_name: 'settings'
    });
})
app.get("/admin/register", (req, res) => {
    res.render('Admin/register');
})
app.get("/admin/resetPassword/:id", (req, res) => {
    let resetLink = req.params.id
    res.render('Admin/resetPassword',{
        resetLink : resetLink
    });
})
app.get("/staff/login", (req, res) => {
    res.render("Staff/login")
})
app.get("/staff/dashboard", (req, res) => {
    res.render("Staff/dashboard", { user: 'Brajesh Mishra', page_name: 'overview' })
})
app.get("/student/login", (req, res) => {
    res.render("Student/login")
})
app.get("/student/dashboard", (req, res) => {
    res.render("Student/dashboard", { name: 'Brajesh Mishra', page_name: 'overview' })
})
app.listen(4000, () => {
    console.log("server started at 4000");
})