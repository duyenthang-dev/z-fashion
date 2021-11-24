import * as React from 'react';
import "./Pagnigation.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className="container">
      <Pagination className="pagination__item" size="large" variant="outlined" color="primary" count={5} page={page} onChange={handleChange} />
    </Stack>
  );
}