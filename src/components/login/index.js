const Login = () => {
	return (
		<div className="container">
			<div className="form-group">
				<label htmlFor="">Username</label>
				<input type="text" className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="">Password</label>
				<input type="password" className="form-control" />
			</div>
			<br />
			<button type="submit" className="btn btn-primary">
				Login
			</button>
		</div>
	);
};

export default Login;
