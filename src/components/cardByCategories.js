import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Tooltip } from "antd";
import { TrimTextWithEllipse } from "../utils/trimText";

const CardByCategories = (cat) => {
	const navigate = useNavigate();
	const { _id, image, name } = cat?.cat;
	return (
		<Tooltip title={name}>
			<div
				className="rounded-3xl  w-[180px] h-[200px] flex items-center flex-col bg-bright-blue md:bg-primary-blue m-[6px] px-[10px] py-[6px] pt-[4px] hover:cursor-pointer hover:shadow-md  "
				key={_id}
				onClick={() => {
					navigate(`/categories/${name}`, { state: { _id, name } });
				}}>
				<img
					alt=""
					src={image}
					className="h-[180px] w-[140px] object-center mt-[10px] "
				/>
				<br />

				<p className="h3 text-black font-poppins mt-[-20px]">
					{" "}
					{TrimTextWithEllipse(name, 10)}
				</p>
			</div>
		</Tooltip>
	);
};

export default CardByCategories;
