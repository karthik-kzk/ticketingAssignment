import React from 'react';
import MaterialTable from 'material-table';
import {tableIcons} from './icons';






function ActionOverriding() {

  const { useState } = React;

  const [columns] = useState([
    { title: 'Level Code', field: 'code' },
    { title: 'Level Name', field: 'name' },
    // { title: 'User', field: 'imageUrl', 
    // render: rowData => <img src={rowData.imageUrl} 
    // style={{width: 30, borderRadius: '50%'}}/>,
    // editable: 'never' },
    
    {
      title: 'Skill Level',
      field: 'priority',
      lookup: { 3: '1', 6: '2' , 4:'4', 99:'5'},
      
    },
    {
      title: 'Status',
      field: 'status',
      lookup: { 34: 'Active', 63: 'completed'},
    }
  ]);

  const [data, setData] = useState([
    { code:'CMPLX',name: 'Complex',priority:99, status: 34 },
    { code:'MED',name: 'Medium',priority:4, status: 34},
    { code:'SMP',name: 'Simple',priority:3, status: 34},
  ])
 

  return (
    <MaterialTable
      icons={tableIcons}
      title="Assignment"
      columns={columns}
      data={data}
      options={{
       
        actionsColumnIndex: -1
      }}
      
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
         
      }}
    />
      
   
  )
}


export default ActionOverriding;