import { GoX, GoChevronDown } from 'react-icons/go';
import { Collapse } from 'react-collapse';


export default function AccordionItem({open, toggleAccordionItem, title, date_applied, method, cover_letter, referral, notes, first, second, third, rejected, offer}) {


  return (
    <div className="border border-solid border-black">
      <div
      className="bg-white py-[25px] px-[50px] flex justify-between items-center cursor-pointer"
      onClick={toggleAccordionItem}
      >
        <p className="text-[22px] font-semibold">{title}</p>
        <div className="text-[30px]">
          {open ? <GoX /> : <GoChevronDown />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className='bg-white px-[50px] pb-[20px]'>{date_applied}</div>
      </Collapse>

    </div>
  )
}