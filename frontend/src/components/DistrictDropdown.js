import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const districtLists = [
  { label: "Alappuzha (AL)", href: "" },
  { label: "Ernakulam (ER)", href: "" },
  { label: "Idukki (ID)", href: "" },
  { label: "Kannur (KN)", href: "" },
  { label: "Kasaragod (KS)", href: "" },
  { label: "Kollam (KL)", href: "" },
  { label: "Kottayam (KT)", href: "" },
  { label: "Kozhikode (KZ)", href: "" },
  { label: "Malappuram (MA)", href: "" },
  { label: "Palakkad (PL)", href: "" },
  { label: "Pathanamthitta (PT)", href: "" },
  { label: "Thiruvananthapuram (TV)", href: "" },
  { label: "Thrissur (TS)", href: "" },
  { label: "Wayanad (WA)", href: "" },
]

export default function Districts() {
  return (
    <select class='w-24' placeholder='Districts'>
        <option disabled selected>Districts</option>
        <option>{districtLists[0].label}</option>
        <option>{districtLists[1].label}</option>
        <option>{districtLists[2].label}</option>
        <option>{districtLists[3].label}</option>
        <option>{districtLists[4].label}</option>
        <option>{districtLists[5].label}</option>
        <option>{districtLists[6].label}</option>
        <option>{districtLists[7].label}</option>
        <option>{districtLists[8].label}</option>
        <option>{districtLists[9].label}</option>
        <option>{districtLists[10].label}</option>
        <option>{districtLists[11].label}</option>
        <option>{districtLists[12].label}</option>
        <option>{districtLists[13].label}</option>
    </select>
  )
}
