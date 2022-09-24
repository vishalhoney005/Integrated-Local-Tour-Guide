import { React, Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { SearchIcon, MenuIcon, ShoppingCartIcon, XIcon, UserIcon, LoginIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

import logo_big from 'assets/asiet.png'
import Districts from './DistrictDropdown'

const navigation = [
  { name: 'Wishlist', href: '#', current: false },
  { name: 'Upload', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Logo = () => {
  return (
    <div class="flex items-center w-1/4">
      <div class="flex-shrink-0">
        <Link to='/' >
          <label class='font-bold text-gray-700 text-md'> Travel lens</label>
        </Link>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div class='mx-8 w-full'>
      <div class="py-2 relative text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" class="absolute right-0 top-0 mt-4 mr-3">
          <SearchIcon class='h-6  w-6 ' aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function NavigationLinks() {
  return (
  <div class="hidden md:block">
    <div class="text-left h-auto flex flex-1 items-baseline space-x-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          class={classNames(
            item.current
              ? 'bg-suyati-blue text-white'
              : 'text-suyati-gray hover:bg-suyati-blue hover:text-white',
            'px-3 py-2 text-left rounded-md text-sm font-medium my-auto'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>

  )
}



export default function Navbar() {

  return (
    <>
      <div class="min-h-full md:sticky shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-evenly h-16 space-x-9">

            <Logo />
            <SearchBar />

            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6 space-x-6">

                <NavigationLinks />
                <Districts />

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}




