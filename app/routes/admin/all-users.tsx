import React from 'react'
import { Header } from 'components'
import { GridComponent } from "@syncfusion/ej2-react-grids"
import { users } from '~/constants/index'

const AllUsers = () => {
    return (
        <main className='all-users wrapper'>
             <Header 
        title={'Manage Users 👤'}
        description="Filter, sort, and acesss detailer user profiles"
      />

      <GridComponent dataSource={users}>


      </GridComponent>
      
        </main>
    )
}
export default AllUsers
