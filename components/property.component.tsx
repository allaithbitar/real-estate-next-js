import React from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";
import { IProperty } from "../interfaces/properties.interface";

interface Props {
  property: IProperty;
}

const Property: React.FC<Props> = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      {title}
    </Link>
  );
};

export default Property;
