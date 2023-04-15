import { useUser } from "@clerk/nextjs";
import { links } from "./navbarLinks/navbarLinksList";
import { NavIcon } from "./navIcon";
import { APP_TITLE } from "~/appStaticGlobals";
import { NAVBAR_ICON } from "./navbarStaticConsts";

export const Navbar = () => {
  const user = useUser();
  return (
    <nav className="bg-gray border-gray-200 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <NavIcon iconURL={NAVBAR_ICON} navTitle={APP_TITLE} />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            {links(user.isSignedIn || false)}
          </ul>
        </div>
      </div>
    </nav>
  );
};
