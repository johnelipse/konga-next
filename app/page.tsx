import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch} from "react-icons/ci";
import {IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from 'react-icons/lu';
export default function Page() {
  return (
    <header>
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


    <div className='bg-[#ed017f] py-[1rem] px-[1rem]'>

    <div>
<Link href="/">
  <Image width={327} height={90} className='w-[100px] h-[25px]' src="/logo.png" alt="" />
</Link>
<Link className='text-white' href="/">Store Locator</Link>
<Link className='text-white' href="/">Sell On Konga</Link> 
    </div>
    
    <div>
    <div>
    <input type="text" placeholder='Search for products, brands and categories' />
    <CiSearch />
      </div>  
    <Link className='text-white' href="/">Help<IoIosArrowDown /></Link>
    <Link className='text-white' href="/">Login/SignUp</Link>
    </div>
<button className='text-white bg-[#33b27b] flex items-center gap-2 py-[0.6rem] px-[1rem]'>My Cart<LuShoppingCart/><span>0</span></button>
      </div> 
    </header>
  )
}

