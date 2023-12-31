import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';

import AddTaskForm from './forms/AddTaskForm';
import { Typography } from '@mui/joy';

export default function AddTask() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button sx={{
        height:"50px",
        width:"50px",
        background:"#D4D4AA",
        ":hover":{
          background:"#EDB458"
        }
      }} variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        <Typography>+</Typography>
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <AddTaskForm></AddTaskForm>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}