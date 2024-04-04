import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  HiMagnifyingGlass,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineUser,
  HiOutlineLightBulb,
  HiMiniArrowRightOnRectangle,
  HiOutlineBriefcase,
} from "react-icons/hi2";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button.jsx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./mode-toggle.jsx";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import logo from "@/assets/ArtisanLogo.png";

function Navbar({ isAssessmentOpen, isAdmin }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const arrowStyle =
    "cursor-pointer absolute -right-3 top-9 border-2 text-2xl p-1 bg-white border-indigo-500 rounded-full text-zinc-400 z-50";

  const linkClass = ({ isActive }) =>
    isActive
      ? `mt-2 mb-2 text-gray-100 bg-indigo-800 flex text-2xl items-center gap-x-4 cursor-pointer p-2 rounded-md transition duration-200 ease-in-out`
      : `mt-2 text-gray-100 flex text-2xl items-center gap-x-4 cursor-pointer p-2 hover:bg-indigo-700 rounded-md transition duration-200 ease-in-out`;

  return (
    <nav className="fixed z-50">
      <div
        className={`${
          openSidebar ? "w-72" : "w-20"
        } duration-300 h-[calc(100vh+100px)] bg-indigo-500 relative p-5 pt-8 z-50`}
      >
        {!openSidebar ? (
          <HiChevronRight
            onClick={() => setOpenSidebar(!openSidebar)}
            className={arrowStyle}
          />
        ) : (
          <HiChevronLeft
            onClick={() => setOpenSidebar(!openSidebar)}
            className={arrowStyle}
          />
        )}
        <div className="flex items-center gap-x-4 mb-5">
          <img src={logo} className="cursor-pointer w-16 duration-500" />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !openSidebar && "scale-0"
            }`}
          >
            Artisan Peeper
          </h1>
        </div>

        <NavLink to="/dashboard" className={linkClass}>
          <HiMagnifyingGlass className="text-gray-100" />
          <span
            className={`text-sm ${
              !openSidebar && "hidden"
            } origin-left duration-200`}
          >
            Explore
          </span>
        </NavLink>

        {isAssessmentOpen ? (
          <NavLink to="/assessment-dashboard" className={linkClass}>
            <HiOutlineLightBulb />
            <span
              className={`text-gray-100 text-sm ${
                !openSidebar && "hidden"
              } origin-left duration-200`}
            >
              Assessment
            </span>
          </NavLink>
        ) : (
          ""
        )}

        {isAdmin ? (
          <NavLink to="/add-job" className={linkClass}>
            <HiOutlineBriefcase />
            <span
              className={`text-gray-100 text-sm ${
                !openSidebar && "hidden"
              } origin-left duration-200`}
            >
              Add Job
            </span>
          </NavLink>
        ) : (
          <div className="`text-gray-100 flex text-2xl items-center gap-x-4 cursor-pointer p-2 hover:bg-indigo-700 rounded-md transition duration-200 ease-in-out`">
            <HiOutlineUser className="text-gray-100" />
            <Sheet>
              <SheetTrigger asChild>
                <span
                  className={`text-gray-100 text-sm ${
                    !openSidebar && "hidden"
                  } origin-left duration-200`}
                >
                  Profile
                </span>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </SheetDescription>
                </SheetHeader>
                <form>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="col-span-3"
                        required
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </form>
              </SheetContent>
            </Sheet>
          </div>
        )}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="mt-2 text-gray-100 flex text-2xl items-center gap-x-4 cursor-pointer p-2 hover:bg-indigo-700 rounded-md transition duration-200 ease-in-out">
              <HiMiniArrowRightOnRectangle />
              <span
                className={`text-gray-100 text-sm ${
                  !openSidebar && "hidden"
                } origin-left duration-200`}
              >
                Log-out
              </span>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to log-out?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>
                <NavLink to="/login">Continue</NavLink>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <div className="mt-9">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;