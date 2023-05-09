import React from "react";

const AccountSession = () => {
	return (
		<div>
			<div className="py-3 w-full px-5 md:font-bold font-semibold">
				<h2>ACCCOUNT OVERVIEW</h2>
			</div>
			<hr />
			<div className=" flex-wrap p-5 flex justify-between gap-4">
				<div className=" w-full md:w-[320px] h-[170px] border rounded-lg">
					<div className="py-3 w-full px-5 md:font-bold font-semibold">
						<h2 className="font-semibold">Account Details</h2>
					</div>
					<hr />
					<div className="px-5 pt-2">
						<h2 className="font-semibold md:text-[15px] text-[12px]">
							{" "}
							Micheal Owen
						</h2>
						<p className="md:text-[12px] text-[10px]">michealowen@gmail.com</p>
					</div>
				</div>

				<div className="w-full md:w-[320px] h-[170px] border rounded-lg">
					<div className="py-3 w-full px-5 md:font-bold font-semibold flex  justify-between">
						<h2 className="font-semibold">Account Details</h2>
						<p className="text-app-orange">Edit</p>
					</div>
					<hr />
					<div className="px-5 pt-2">
						<h2 className="font-semibold md:text-[15px] text-[12px]">
							Your default shipping address:
						</h2>
						<p className="md:text-[12px] text-[10px] text-app-gray">
							Michael Owen
							<br />
							House No. B13/40, Tantrahills, Greater Accra
							<br />
							GG-738-6606
							<br />
							+233501595121
						</p>
					</div>
				</div>

				<div className="w-full md:w-[320px] h-[170px] border rounded-lg">
					<div className="py-3 w-full px-5 md:font-bold font-semibold flex  justify-between">
						<h2 className="font-semibold">NEWSLETTER PREFERENCE</h2>
					</div>
					<hr />
					<div className="px-5 pt-2">
						{/* <h2 className="font-semibold md:text-[15px] text-[12px]">
							Your default shipping address:
						</h2> */}
						<p className="md:text-[12px] text-[10px] ">
							You are currently not subscribed to any of our newsletters.
						</p>
					</div>
					<h2 className="text-app-orange px-5 align-end cursor-pointer">
						EDIT NEWSLETTER PREFERENCE
					</h2>
				</div>
			</div>
		</div>
	);
};

export default AccountSession;
