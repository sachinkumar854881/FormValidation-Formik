import React from 'react'
import {useFormik}from "formik"

function App(){

    const formik = useFormik({
        initialValues :{
            username:"", //sachin
            email:"",  //sachinkumar854881@gmail.com
            password:""  //upsc854881
        },
        validate: function(data){  //ek data name ka varible banayege or ye sara data is vaariable mein store ho jayega
            console.log(data) //yaha par is data variable ko print kara diya

            let errors = {}
            if(!data.username)
            {
                errors.error1 = "username is required"
            }
            if(!data.email)
            {
                errors.error2 = "email is required"
            }
            if(!data.password)
            {
                errors.error3 = "password is required"
            }
            return errors
        }
    })

    return(
        <div>   
            <center>
                <h2>Contact form</h2>
                <form method="POST">

                    <label>Username:</label>
                    <input type="text"  name="username" value={formik.values.username} onChange={formik.handleChange} /><br/><br/>
                    {formik.errors.error1 ? <h3>{formik.errors.error1}</h3> : null}  

                    <label>Email:</label>
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/><br/><br/>
                    {formik.errors.error2 ? <h3>{formik.errors.error2}</h3> : null}

                    <label>Password:</label>
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/><br/><br/>
                    {formik.errors.error3 ? <h3>{formik.errors.error3}</h3> : null}

                </form>
            </center>
        </div>
    )
}
export default App;