import React from "react";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const navLinks = [
  { href: "/", icon: FcHome, text: "Home" },
  { href: "/search", icon: BsSearch, text: "Search" },
  { href: "/search?purpose=for-sale", icon: FcAbout, text: "Buy Property" },
  { href: "/search?purpose=for-rent", icon: FiKey, text: "Rent Property" },
];

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/">Real Estate</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color="red.400"
        />
        <MenuList>
          {navLinks.map((navlink) => (
            <Link href={navlink.href} passHref>
              <MenuItem icon={<navlink.icon />}>{navlink.text}</MenuItem>
            </Link>
          ))}
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
