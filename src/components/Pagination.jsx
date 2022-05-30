import React from "react";
import { Button,ButtonGroup,Select } from "@chakra-ui/react";

const Pagination = ({handlepage,handlelimit,page}) => {

  return (
    <ButtonGroup marginTop={"20px"} marginLeft={"400px"} >
      <Button data-cy="pagination-first-button" onClick={()=>handlepage(1)}>first</Button>
      <Button data-cy="pagination-previous-button" onClick={()=>handlepage(page-1)}>previous</Button>
      <Select data-cy="pagination-limit-select" onSelect={(e)=>console.log(e.target.value)}>
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6" value={6}>6</option>
        <option data-cy="pagination-limit-9" value={9}>9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={()=>handlepage(page+1)} >next</Button>
      <Button data-cy="pagination-last-button">last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
