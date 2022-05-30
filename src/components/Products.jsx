import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex,Grid } from "@chakra-ui/react";
import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  const [product,setproduct]=useState([])
  const [page,setpage]=useState(1);
  const [limit,setlimit]=useState(3);

  function handlepage(pg)
  {
    setpage(pg);
  }
  function handlelimit(lmt)
  {
    setlimit(lmt);
  }

  useEffect(()=>{
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
    .then((res)=>{
      console.log(res.data)
      setproduct(res.data);
    })
  },[page,limit])

  return (
    <Flex display={"block"} padding={"40px"} >
      <AddProduct />
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {product.map(ele=>{
          return(
            <Product key={ele.id} {...ele} />
          )
        })}
      </Grid>
      <Pagination handlepage={handlepage} handlelimit={handlelimit} page={page} />
    </Flex>
  );
};

export default Products;
