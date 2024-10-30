import { Header } from "../header"


function Registr() {

    return (
        <>
            <Header></Header>
            <div className="pt-[146px]">
                <form className="flex justify-center items-center flex-col gap-[20px] text-white font-body"  action="">
                    <p className="font-bold mb-[28px] text-[32px]">Регистрация</p>
                    <input className="w-[274px] h-[40px] bg-[#2D3538] border-2 border-[#C34D3F] text-center placeholder:text-center" type="text" placeholder="Фамилия Имя Отчество" />
                    <input className="w-[274px] h-[40px] bg-[#2D3538] border-2 border-[#C34D3F] text-center placeholder:text-center" type="email" placeholder="Email"/>
                    <input className="w-[274px] h-[40px] bg-[#2D3538] border-2 border-[#C34D3F] text-center placeholder:text-center" type="password" placeholder="Password"/>
                    <button className="mt-[20px] w-[274px] h-[40px] bg-[#2D3538] border-2 border-[#C34D3F]" type="submit">Зарегестрироваться</button>
                </form>
            </div>
        </>
    )
}

export default Registr