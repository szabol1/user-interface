import React from 'react';

function LoginForm() {
    return (
        <div style={{alignItems: "center"}}>
        <h2>Log In</h2>
        <form className="text-center" style={{ maxWidth: '400px', marginTop:"100px", margin: '0 auto' }}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default LoginForm;