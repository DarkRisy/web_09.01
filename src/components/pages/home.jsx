import { Header } from "../header"


function Home() {

  return (
    <>
      <Header></Header>
      <div>
        <div className="flex justify-between">
          <div className="ml-[22px] text-white">
            <h1 className="font-body mt-[126px]  text-[64px] font-bold">Артель</h1>
            <p className="font-body">Строительная компания</p>
          </div>
          <img className="h-[100%]" src={'./public/images/home_block.svg'} width={512}  alt="" />
        </div>
        <div className=" w-[100%] h-[6px] bg-[#C34D3F]"></div>
      </div>

    </>
  )
}

export default Home