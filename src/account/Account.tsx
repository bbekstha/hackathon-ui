import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { IconButton, Modal, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import ContributionForm from '../contribution/ContributionForm';

const accounts = [
  {
    name: 'Company B 401(k)',
    type: '401k',
    amount: 50000
  },
  {
    name: 'Test IRA account',
    type: 'IRA',
    amount: 20000
  },
  {
    name: 'Company A HSA',
    type: 'HSA',
    amount: 5000
  },
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Account() {
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      amount: data.get('amount'),
      startDate: data.get('startDate'),
      endDate: data.get('endDate')
      // password: data.get('password'),
    });
    setOpen(false)
  };

  return (
    <Box
      sx={{
        marginTop: 3,
        marginLeft: 5,
        marginRight: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'justify',
      }}
    >
      <Typography variant="h5" sx={{ paddingBottom: 3 }}> Accounts</Typography>
      <Stack spacing={5}>
        {accounts.map((account) => (
          <Card key={account.name}>
            <CardHeader
              avatar={<AccountBalanceIcon />}
              title={account.name}
              action={
                <IconButton aria-label="settings" onClick={() => setOpen(true)}>
                  <EditIcon />
                  <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <ContributionForm handleSubmit={handleSubmit} />
                    </Box>
                  </Modal>
                </IconButton>
              }
            />
            <CardContent>{account.amount} </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}