import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiSearch} from "react-icons/ci";
import {IoIosArrowDown, IoIosPricetag, IoMdMenu, IoMdPhonePortrait } from "react-icons/io";
import { LuShoppingCart } from 'react-icons/lu';
import { categoryData } from "@/categories";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdMenu } from 'react-icons/md';
import { BsShop } from 'react-icons/bs';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { TbRotate2 } from 'react-icons/tb';
import { GiClothes } from 'react-icons/gi';
import { HiMiniComputerDesktop } from 'react-icons/hi2';

export default function Header() {
  return (
    <div>
      <header className='hidden lg:block md:hidden '>
   <div className='bg-[#f6f6f6] flex items-center gap-12 justify-between py-0 px-[6rem]'>

   <Link href="">
    <Image width={1400} height={247} className='w-[100px] h-[55px] object-contain' src="/k_travels2.png" alt=''/>
    </Link> 

   <Link href="">
    <Image width={1400} height={352} className='w-[100px] h-[45px] object-contain' src="/konga_pay.png" alt=''/>
    </Link>

<Link href=''> 
  <Image width= {1400} height={247} className='w-[100px] h-[45px] object-contain' src="/new_konga_drinks.png" alt=''/>
  </Link> 

<Link href=''> 
  <Image width= {1400} height={247} className='w-[100px] h-[55px] object-contain' src="/konga_health.png" alt=''/>
  </Link>

   <Link href=''>
    <Image width={1400} height={247} className='w-[100px] h-[55px] object-contain' src="/k_express2.png" alt=''/>
    </Link>

   <Link href=''>
    <Image width={1400} height={247} className='w-[100px] h-[55px] object-contain' src="/new_konga_groceries.png" alt=''/>
    </Link>

   <Link href=''>
    <Image width={1400} height={334} className='ml-[0.5rem] w-[100px] h-[55px] object-contain' src="/kongaTV.png" alt=''/>
    </Link>

   <Link href=''>
    <Image width={1400} height={252} className='ml-[0.5rem] w-[100px] h-[55px] object-contain' src="/kongaNow.png" alt=''/>
    </Link>
    </div> 


   <div className='data-aos="fade-down" sticky w-[100%] top-0'>
   <div className='bg-[#ed017f] py-[1rem] px-[1rem] flex justify-between w-[100%]'>

<div className='flex items-center gap-7'>
<Link href="/">
<Image width={327} height={90} className='w-[100px] h-[25px]' src="/logo.png" alt="loading" />
</Link>
<Link className='text-white hover:bg-slate-50 transition-all duration-500 hover:text-[#ed017f] hover:h-[100%] hover:pt-[0.5rem] hover:px-[0.5rem]' href="/">Store Locator</Link>
<Link className='text-white hover:bg-slate-50 hover:text-[#ed017f] hover:h-[100%] hover:pt-[0.5rem] hover:px-[0.5rem]' href="/">Sell On Konga</Link> 
</div>

<div className='flex items-center gap-7'>
<div className='flex items-center'>
<input className='py-[0.2rem] px-[0.5rem] w-[30rem] outline-0 rounded-l-lg' type="text" placeholder='Search for products, brands and categories' />
<div className='bg-[#fba100] text-white py-[0.2rem] px-[0.5rem] rounded-r-lg'> 
<button>< CiSearch /></button> 
</div>
  </div>  
<Link className='text-white flex items-center' href="/">Help<IoIosArrowDown /></Link>
<Link className='text-white' href="/">Login/SignUp</Link>
</div> 

<button className='text-white bg-[#33b27b] flex items-center gap-5 py-[0.6rem] px-[1rem] rounded-[0.5rem] hover:bg-[#33b27bee]'><h3 className='flex items-center'><LuShoppingCart/>My Cart</h3><span className='bg-white text-black px-1 rounded-sm'>0</span></button>
  </div>

<div className='flex justify-between py-0.5 px-3 bg-[#94004f] text-white text-[14px] w-[100%]'>
<Link href="/">  <h5 className='flex items-center hover:bg-white hover:text-black hover:px-2'>All Categories <span><IoMdMenu/></span></h5></Link>
{
categoryData.map((cart,i)=>{
  return(
    <Link className='hover:bg-white hover:text-black hover:px-2' key={i} href='/'>
     {cart.title}
    </Link>
  )
})
}

</div> 
   </div>
    </header>
<header className='lg:hidden md:block fixed top-0 w-[100%] bg-white'>

<div className='shadow-[rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;]'>
<div className='flex justify-between items-center px-4 py-3'>
<div className='flex gap-3 items-center'>
<button className='text-[19px]'> <MdMenu /> </button>
  <Link href="/">
  <Image width={327} height={90} className='w-[110px] h-[21px] object-contain' src="/konga-logo.png" alt="" />
  </Link>
 </div>
 <div className='flex gap-3 items-center'>
  <button className='text-[19px]'><BsShop /></button>
  <button className='text-[21px]'><LiaShoppingCartSolid /></button>
 </div>
  </div> 
<div className='flex items-center w-[100%] px-4'>
  <input className='w-[96%] bg-[#e8e8e8] text-[14px] py-2 px-1 rounded-l-[6px] outline-0' type="text" placeholder='Search for products, brands and categories...' />
  <button className='py-[10.1px] px-1 bg-[#e8e8e8] rounded-r-[6px] '>< CiSearch /></button>
</div>
</div>
</header>
    </div>
  )
}
