import { Fragment } from "react";
import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Topbar({ showNav, setShowNav }) {
  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile picture"
                />
              </picture>
              <span className="hidden md:block font-medium text-gray-700">
                Prayoga Adi
              </span>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <Link
                    href="#"
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-2" />
                    Logout
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
