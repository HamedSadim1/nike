import { shoe8 } from "@/assets/images"
import { Button } from "../ui"
import Image from "next/image"


const SuperQuality = () => {
  return (
    <section id="about-us" className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-10 max-lg:flex-col">
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='font-montserrat text-slate-gray mt-4 text-lg leading-7 lg:max-w-lg'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='font-montserrat text-slate-gray mt-6 text-lg leading-7 lg:max-w-lg'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex flex-1 items-center justify-center'>
        <Image
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality