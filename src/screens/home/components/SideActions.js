export const SideActions = () =>{

    const sideActions = [
        {
            title: "Shop for self",
            caption:"",
            imgUrl: "https://res.cloudinary.com/fitrip/image/upload/v1689294949/shop_self_gi9uv0.png",
            buttonText: "Shop Now"
        },
        {
            title: "Shop as gift",
            caption:"",
            imgUrl: "https://res.cloudinary.com/fitrip/image/upload/v1689289800/giftimage_xtvevu.png",
            buttonText: "Shop Now"
        }
    ]

    return (
        <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {
                sideActions.map((action, index) => {
                  return  (
                      <div className="grad flex-1 h-[200px] rounded-[8px] overflow-hidden relative p-6 bg-slate-200 m-[20px] bg-opacity-25">
                        <div className="flex flex-col max-w-[204px] h-full justify-center">
                            <div className="text-[20px] uppercase font-medium mb-4 text-center font-mont">
                                {action.title}
                            </div>
                            <button className="btn btn-accent mx-auto lg:mx-0 ">{action.buttonText}</button>
                        </div>
                        <img
                            className="absolute z-20 -top-2 -right-4 w-[50%]"
                            src={action.imgUrl}
                            alt="Promo 1"
                        />
                    </div>)
                })
            }
        </div>
    )
}

