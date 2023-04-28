import React, { useState } from "react";

const SearchComponent = () => {
	const [search, setSearch] = useState("");

	const submit = () => {};

	return (
		<div className="w-full md:hidden flex bg-app-orange h-[100px] mt-[50px] justify-center items-center">
			<form
				className="items-center justify-between flex mt-[30px]   md:flex w-3/4 bg-white rounded-3xl"
				type={submit}>
				<input
					onChange={e => setSearch(e.target.value)}
					value={search}
					className="md:h-[30px] h-[30px] w-full rounded-2xl px-3 border-none outline-none bg-white"
					placeholder="Search products and categories"
				/>
				<button
					className="  bg-bright-blue rounded-2xl h-[30px] md:h-[30px] md:px-[30px] px-[20px] text-white font-bold"
					type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchComponent;
