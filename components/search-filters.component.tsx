import React, { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/dist/client/image";
import { filterData, getFilterValues } from "../utils/filter-data";

const SearchFilters: React.FC = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues: any) => {
    const { pathname } = router;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      query[item.name] = item.value;
    });
    router.push({ pathname, query });
  };
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => {
        return (
          <Box key={filter.queryName}>
            <Select
              placeholder={filter.placeholder}
              w="fit-content"
              p="2"
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter?.items?.map((item) => {
                return (
                  <option value={item.value} key={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </Select>
          </Box>
        );
      })}
    </Flex>
  );
};

export default SearchFilters;
