import React from "react";
import {
  HamburgerMenu,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarHeader,
  NavbarMenu,
} from "../layouts/navbar";

// import HamburgerTemplate from "@/templates/hamburgerTemplate";

const searchItems = [
  {
    value: "Hello world",
    label: "Μαθηματικά 1",
  },
];

function NavbarTemplate() {
  return (
    <Navbar className='backdrop-blur-xl border-b border-border z-50'>
      <NavbarHeader className='py-2'>
        <NavbarBrand>
          {/* <Link href={"/"}>
            <h1 className='text-2xl font-extrabold font-serif'>DIPAE</h1>
          </Link> */}
          Heloo 
        </NavbarBrand>
        <NavbarMenu>
          {/* <MenubarTemplate></MenubarTemplate> */}
          <p className="bg-red-500">click me</p>
        </NavbarMenu>
      </NavbarHeader>
      <NavbarActions>
        {/* <Combobox
          SearchItems={searchItems}
          placeholder='Αναζήτηση ενότητας'
          notFound='Δέν βρέθηκε'
          title={<p>Αναζήτηση</p>}
        /> */}
      </NavbarActions>
      {/* <div className='flex flex-row gap-4'>
        <ModeToggle></ModeToggle>
        <HamburgerMenu title='' description=''>
          <HamburgerTemplate></HamburgerTemplate>
        </HamburgerMenu>
      </div> */}
    </Navbar>
  );
}

export default NavbarTemplate;
