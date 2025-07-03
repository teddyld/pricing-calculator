import React from "react";

import { pageData } from "../utils/pageData";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/react";

import { useLocation } from "react-router";

import LuxLogo from "../assets/lux-energy-192x192.png";
import LuxLogoText from "../assets/lux-energy-text.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      disableAnimation
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={LuxLogo} className="h-8 w-8 sm:hidden" alt="Lux logo" />
          <img
            src={LuxLogoText}
            className="hidden w-32 sm:flex"
            alt="Lux logo"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {pageData.map((page, i) => {
          return (
            <NavbarItem
              key={`${page.name}-${i}`}
              isActive={location.pathname === page.path}
            >
              <Link
                href={page.path}
                color={
                  location.pathname !== page.path ? "foreground" : "primary"
                }
              >
                {page.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end" />
      <NavbarMenu>
        {pageData.map((page, i) => {
          return (
            <NavbarMenuItem
              key={`item-${i}`}
              isActive={location.pathname === page.path}
            >
              <Link
                href={page.path}
                color={
                  location.pathname !== page.path ? "foreground" : "primary"
                }
              >
                {page.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
