import {Link} from 'react-router-dom';

export function Header() {
    return (
        <>
        <div className="fixed flex w-[100%] h-[99px] justify-between items-center bg-[#1E1E1E] bg-opacity-[0.39] px-[22px]">
            <a href=""><img src={'./public/images/logo.svg'} width={69} height={75} alt="" /></a>
            <nav className="flex gap-[89px] items-center  text-white font-body">
                <a href=""><Link to="/">Главная</Link></a>
                <a href=""><Link to="/products">Продукция</Link></a>
                <a href=""><Link to="/about">О нас</Link></a>
                <a href=""><Link to="/cart"><img src={'./public/images/cart.svg'} width={59} height={43} alt="" /></Link></a>
            </nav>
            <a href=""><Link to="/registr"><img src={'./public/images/user.svg'} width={50} height={45} alt="" /></Link></a>

        </div>
           
        </>
    )


}