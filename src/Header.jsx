import Navbar from './Navbar';

function Header() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="mb-10">
        <p className="text-[#FFFFFF] font-thin -mt-[3vw] -mb-[2vw] text-[3vw] text-center">
          __________________________________________________________________
        </p>
      </div>

      <div className="flex flex-col-2 items-center  gap-10 m-1 p-5">
        <img
          src="/src/assets/img_art.png"
          className="h-20 md:h-50 lg:h-50 sm:m-10"
        ></img>
        
        <p className="boldonse text-blue-100 text-[5vw]">
          <p className="ubuntu-light-italic text-[1vw]">Mindanao Kokusai Daigaku</p>
          <p className="ubuntu-light mb-2 text-[1vw]">_________________________________________________________________________________</p>  
          OPEN FORUM<br></br>
          
          <p className="dm-sans text-[1.3vw] mt-2 text-[#e1eef6]">
            Keep it happy, healthy, and enjoyable for everyone.
          </p>
          <p className="mb-1 cursive text-[1.4vw] text-[#cfc9ed]">or else. 
            😉
          </p>
          
        </p>

        {/* <img>
          src="/src/assets/MKDLogo.png"
          className="w-20 h-20 md:w-50 md:h-50 lg:w-50 lg:h-50 sm:m-10"
        ></img> */}
      </div>

      <div className="">
        <p className="text-[#FFFFFF] font-thin -mt-[3vw] -mb-[1vw] text-[3vw] text-center">
          __________________________________________________________________
        </p>
      </div>
    </>
  );
}

export default Header;
