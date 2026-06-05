import { shoe8 } from "@/assets/images"
import { Button, SectionHeading, SectionLayout } from "../ui"
import Image from "next/image"
import { superQualityContent } from "@/constants"


const SuperQuality = () => {
  return (
    <SectionLayout id="about-us" className="flex w-full items-center justify-between gap-10 max-lg:flex-col">
      <div className='flex flex-1 flex-col'>
        <SectionHeading
          titlePrefix={superQualityContent.titlePrefix}
          titleHighlight={superQualityContent.titleHighlight1}
          titleHighlight2={superQualityContent.titleHighlight2}
          titleSuffix={superQualityContent.titleSuffix}
          capitalize
          className="lg:max-w-lg"
        />
        <p className='font-montserrat text-slate-gray mt-4 text-lg leading-7 lg:max-w-lg'>
          {superQualityContent.description1}
        </p>
        <p className='font-montserrat text-slate-gray mt-6 text-lg leading-7 lg:max-w-lg'>
          {superQualityContent.description2}
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
    </SectionLayout>
  )
}

export default SuperQuality