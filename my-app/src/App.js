import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  
}

const tableColor   = "#CEDFFF"
const scrollColor  = "#82ADFE"
const messageColor = scrollColor 
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createChat(Name) {

  var Key = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var counter = 0;
  while (counter < 20) {
    Key += characters.charAt(Math.floor(Math.random() * characters.length));
    counter += 1;
  }
  console.log(Key)
  return { Name, Key};
}

function createMessage(User, Message, Time){
  
  var Key = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var counter = 0;
  while (counter < 20) {
    Key += characters.charAt(Math.floor(Math.random() * characters.length));
    counter += 1;
  }
  let Side = (User==currentUser ? "right":"left")
  console.log(Side)
  return {Key, Side, User, Message, Time};
}

const rows = [
  createChat('Shmuck Coin'),
  createChat('Clown Car'),
  createChat('Devs'),
  createChat('Dicey Business'),
];

const currentUser = 1
const messages = [
  
  createMessage( 2, "New Group Chat", 96),
  createMessage( 1, "To the Moon! #ETH/BASE", 100),
  createMessage( 2, "Nice!", 120),
  createMessage( 3, "Hey @-----, check out this #PEPE/WETH", 121),
  createMessage( 1, "@-----, which Testnet do you use for Base?", 125),
  createMessage( 2, "#GETH", 128),
  createMessage( 1, "cool", 140),
];

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function setSelectedRow(row){
    console.log(row)
  }
  return (
    <html>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet"/>
      <div style={{left: "30px", top: "30px", position: "absolute", width: 300, 'fontFamily':'Roboto Mono'}}>
        <TableContainer component={Paper} elevation={3} sx={{ maxWidth:"300px", width: "max-content", left:"300px", maxHeight: '90vh', overflow: 'auto' }}>
        <Table sx={{ width: 290 }} aria-label="custom pagination table">
          <TableBody>
            {(rows
            ).map((row) => (
              <TableRow key={row.Name} onClick={() => setSelectedRow(row)}>
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          
        </Table>
        </TableContainer>
      </div>
      
      <div style={{left: "360px", top: "30px", position: "absolute", width: 600}}>
        <TableContainer component={Paper} elevation={7} sx={{  maxWidth:"600px", width: "max-content", left:"300px", maxHeight: '90vh', overflow: 'auto', "&::-webkit-scrollbar": {width: 5},  "&::-webkit-scrollbar-thumb": {backgroundColor: scrollColor,borderRadius: 2}, backgroundColor: tableColor }}>
          <Table sx={{ width: 590 }} aria-label="custom pagination table">
            <TableBody>
              
              {(messages
              ).map((row) => (
                <Card style={{height: "100px", margin:'20px', width:"500px", marginLeft: (row.Side == "left"? 10 : "auto"), marginRight:(row.Side == "right"? 10 : "auto")}}>
                  <CardContent>
                    <Typography variant="h9" component="h3">
                      {row.Message}
                    </Typography>
                    <Typography sx={{color:messageColor}}>
                      {row.User}
                    </Typography>
                    <Typography sx={{color:messageColor}}>
                      {row.Time}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
              
            </TableBody>
            

          </Table>
        </TableContainer>
      </div>
    </html>
  );
  
}
