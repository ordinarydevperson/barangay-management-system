import * as React from 'react'
import Select from 'react-select'
import { IoIosSearch } from "react-icons/io";
import Table from './Table';
const Admin = () => {
  const [allResident, setAllResident] = React.useState([])
  const options = [
    { value: 10, label: '10' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 100, label: '100'}
  ]

  React.useEffect(() => {
  
    (async () => {
      try {
        const res = await fetch('http://localhost/barangay/api/resident/read.php');
        const jsonData = await res.json()
        setAllResident(jsonData.data)
      } catch (error) {
        console.log({error})
      }
     
    })()
  }, [])
  return (
    <div className='container px-5 mx-auto mt-5'>
      <div className='flex items-center justify-between'>
        <div className='w-[100px]'>
          <Select className=' w-full text-center' options={options}/>
        </div>
        <div className='relative'>
          <input placeholder='Search' className='bg-white py-2 px-4 border-solid border-2 border-black rounded-md w-[300px]' />
          <span className='absolute top-2 right-2' onClick={() => console.log('SEARCH')}><IoIosSearch className='text-2xl cursor-pointer'/></span>
        </div>

      </div>
      <Table data={allResident} />
      
    </div>
  )
}

export default Admin