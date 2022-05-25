const Form = () => {
	return (
		<div>
			<div className="form-group">
				<label htmlFor="">Nama</label>
				<input type="text" className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="">Description</label>
				<input type="text" className="form-control" />
			</div>
			<br />
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</div>
	);
};

export default Form;
