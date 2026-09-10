'use client';

const OYinchilar = ({name,reting, num,number, dekabr, img}) => {
    return<>

        <div className={"relative bottom-426 left-117 w-169 h-18 bg-g text-[14px]"}>
            <div className={"flex gap-1"}>
                <img src={"img00050.svg"} alt=""/>
                <h1 className={"text-white text-[14px]"}>{name}</h1>
                <p className={"text-gray-600 text-[14px] relative left-9.25"}>{reting}</p>
                <p className={"text-white text-[14px] relative left-17"}>{num}</p>
                <img className={"ml-27"} src={img} alt=""/>
                <p className={'text-white ml-15'}>{number}</p>
                <p className={'text-white ml-15'}>{dekabr}</p>
            </div>
            <div className={"flex gap-1 text-[14px]"}>
                <img src={"img00051.svg"} alt=""/>
                <h1 className={"text-white text-[14px]"}>nikaru hakamura</h1>
                <p className={'text-gray-600 ml-17'}>(2768)</p>
                <p className={'text-white ml-8'}>0</p>
            </div>
        </div>

    </>
}
export default OYinchilar