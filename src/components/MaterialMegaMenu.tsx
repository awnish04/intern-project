import React from "react";
import {
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { ThemeToggle } from "./theme-toggle";

const navListMenuItems = [
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Events",
    description: "Check out our upcoming events and activities.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];

const navListMenuItemsCompany = [
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Careers",
    description: "Explore career opportunities and join our team.",
    icon: UserGroupIcon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Contact Us",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
];
const navListMenuItemsProducts = [
  {
    title: "Overview",
    description: "Get an overview of our products and services.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Features",
    description: "Explore the features and capabilities of our solutions.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Solution",
    description: "Discover our comprehensive solution offerings.",
    icon: TagIcon,
  },
  {
    title: "Tutorial",
    description: "Learn how to use our products with our tutorials.",
    icon: Bars4Icon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const handleItemClick = (title: string) => {
    setSelectedItem(title === selectedItem ? null : title);
  };

  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <div
          className={`flex items-center gap-3 rounded-lg bg-background text-foreground hover:bg-[#111A2B] hover:text-white p-3 ${
            selectedItem === title ? "selected" : ""
          }`}
          onClick={() => handleItemClick(title)}
        >
          <div className="flex items-center justify-center rounded-lg p-2 bg-background text-foreground">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <div className="flex items-center text-lg font-semibold">
              {title}
            </div>
            <div className="text-sm font-medium">{description}</div>
          </div>
        </div>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div className="font-medium">
            <div
              className={`flex items-center gap-2 mr-4 px-2.5 py-2 pr-2.5 font-medium rounded-lg hover:bg-[#111A2B] hover:text-white cursor-pointer bg-background text-foreground ${
                isMenuOpen || isMobileMenuOpen ? "selected" : ""
              }`}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block bg-background text-foreground border border-opacity-10"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0 bg-background text-foreground">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavListMenuCompany() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const handleItemClick = (title: string) => {
    setSelectedItem(title === selectedItem ? null : title);
  };
  const renderItems = navListMenuItemsCompany.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <div
          className={`flex items-center gap-3 rounded-lg bg-background text-foreground hover:bg-[#111A2B] hover:text-white p-3 ${
            selectedItem === title ? "selected" : ""
          }`}
          onClick={() => handleItemClick(title)}
        >
          <div className="flex items-center justify-center rounded-lg  p-2 bg-background text-foreground ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6  w-6",
            })}
          </div>
          <div>
            <div className="flex items-center text-lg font-semibold ">
              {title}
            </div>
            <div className="text-sm !font-medium  ">{description}</div>
          </div>
        </div>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div className="font-medium">
            <div
              className={`flex items-center gap-2 mr-4 px-2.5 py-2 pr-2.5 font-medium rounded-lg hover:bg-[#111A2B] hover:text-white cursor-pointer bg-background text-foreground ${
                isMenuOpen || isMobileMenuOpen ? "selected" : ""
              }`}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Company
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block bg-background text-foreground border border-opacity-10"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0 bg-background text-foreground">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavListMenuProducts() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const handleItemClick = (title: string) => {
    setSelectedItem(title === selectedItem ? null : title);
  };
  const renderItems = navListMenuItemsProducts.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <div
          className={`flex items-center gap-3 rounded-lg bg-background text-foreground hover:bg-[#111A2B] hover:text-white p-3 ${
            selectedItem === title ? "selected" : ""
          }`}
          onClick={() => handleItemClick(title)}
        >
          <div className="flex items-center justify-center rounded-lg  p-2 bg-background text-foreground ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6  w-6",
            })}
          </div>
          <div>
            <div className="flex items-center text-lg font-semibold ">
              {title}
            </div>
            <div className="text-sm !font-medium  ">{description}</div>
          </div>
        </div>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div className="font-medium">
            <div
              className={`flex items-center gap-2 mr-4 px-2.5 py-2 pr-2.5 font-medium rounded-lg hover:bg-[#111A2B] hover:text-white cursor-pointer bg-background text-foreground ${
                isMenuOpen || isMobileMenuOpen ? "selected" : ""
              }`}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Products
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block bg-background text-foreground border border-opacity-10"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <ul className="grid grid-cols-2 gap-y-2 outline-none outline-0 bg-background text-foreground">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <div className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex lg:p-1">
      <a href="#" className="font-medium bg-background text-foreground">
        <div
          className="flex items-center gap-2 mr-4 px-2.5 py-2 pr-2.5 font-medium
        rounded-lg lg:hover:bg-[#111A2B] lg:hover:text-white cursor-pointer bg-background
        text-foreground"
        >
          Home
        </div>
      </a>
      <NavListMenuProducts />
      <NavListMenu />
      <NavListMenuCompany />

      <a href="#" className="font-medium bg-background text-foreground">
        <div
          className="flex items-center gap-2 mr-4 px-2.5 py-2 pr-2.5 font-medium
        rounded-lg lg:hover:bg-[#111A2B] lg:hover:text-white cursor-pointer bg-background
        text-foreground"
        >
          Contact Us
        </div>
      </a>
    </div>
  );
}

export function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-2 border-none shadow-none bg-transparent text-foreground">
      <div className="flex items-center justify-between ">
        <a
          href="#"
          className="mr-4 hidden lg:flex cursor-pointer py-1.5 lg:ml-2 bg-background text-foreground"
        >
          <a href="/">
            <h1 className="underline font-light">createdByAwnish</h1>
          </a>
        </a>
        <div className="hidden lg:flex">
          <NavList />
        </div>
        <ThemeToggle />
        <span
          className="lg:hidden bg-background text-foreground"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </span>
      </div>

      <Collapse open={openNav}>
        <div className="mt-6 px-2">
          <a href="/">
            <h1 className="mr-4 underline font-light">createdByAwnish</h1>
          </a>
        </div>

        <NavList />
      </Collapse>
    </div>
  );
}
