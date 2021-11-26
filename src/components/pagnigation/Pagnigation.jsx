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
    <div style={{width: "100%"}}>
      <Stack spacing={4} className="container" >
        <Pagination size="large" variant="outlined" color="primary" count={5} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}