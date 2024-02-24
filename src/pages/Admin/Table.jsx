import React, {useState} from 'react'
import { IoIosSearch } from "react-icons/io";
import { RxTriangleUp, RxTriangleDown  } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Modal from '../../components/Modal/Modal';
const Table = ({data}) => {
  console.log(data)
  const [sort, setSort] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [viewDetail, setViewDetail] = useState({})

  const handleSorting = (name) => {
    if(sort == '') {
      setSort('upward')
    }
    if(sort == 'upward') {
      setSort('downward')
    }
    if(sort == 'downward') {
      setSort('upward')
    }
    handleSortByName()
  }

  const handleSortByName = (name) => {
    if(sort == '') return data
    const updateData = [...data].sort((a,b) => {
      if(a.lname < b.lname) return sort == 'upward' ? -1 : 1;
      if(a.lname > b.lname) return sort == 'upward' ? 1 : -1;
    })

    return updateData
  }

  const handleViewDetail = (detail) => {
    setOpenModal(true)
    setViewDetail(detail)
  }
  const headerText = 'text-xl border-solid border-2 border-gray w-full text-center'
  return (
    <>
      <table className='rtl:text-right text-left border-collapse border border-slate-200 auto w-full mt-5'>
        <thead>
          <tr >
            <th className='border border-slate-300 py-4 pl-4'>Image</th>
            <th className='border border-slate-300 py-4 pl-4 flex items-center justify-between'>
              Name 
              <div onClick={handleSorting}>
                <RxTriangleUp className={`text-lg cursor-pointer text-gray-300 ${sort == 'upward' ? 'text-black' : ''}`} />
                <RxTriangleDown className={`text-lg cursor-pointer text-gray-300 ${sort == 'downward' ? 'text-black' : ''}`} /> 
              </div>
            </th>
            <th className='border border-slate-300 py-4 pl-4'>Barangay</th>
            <th className='border border-slate-300 py-4 pl-4'>Zone</th>
            <th className='border border-slate-300 py-4 pl-4'>Age</th>
            <th className='border border-slate-300 py-4 pl-4'>Gender</th>
            <th className='border border-slate-300 py-4 pl-4'>Former Address</th>
            <th className='border border-slate-300 py-4 pl-4'>Option</th>
          </tr>
        </thead>
      <tbody>
        {handleSortByName().map((resident, index) => {
          return (
            <tr className='odd:bg-gray-200 border border-slate-300'>
              <td className='px-6 py-4 border border-slate-300'><img src={`${resident.image}`} alt={resident.id}/></td>
              <td className='px-6 py-4 border border-slate-300'>{resident.lname}, {resident.fname}</td>
              <td className='px-6 py-4 border border-slate-300'>{resident.barangay}</td>
              <td className='px-6 py-4 border border-slate-300'>{resident.zone}</td>
              <td className='px-6 py-4 border border-slate-300'>{resident.age}</td>
              <td className='px-6 py-4 border border-slate-300'>{resident.gender}</td>
              <td className='px-6 py-4 border border-slate-300'>{resident.formerAddress}</td>
              <td className='px-6 py-4 border border-slate-300 w-[200px]'>
                <span onClick={() => handleViewDetail(resident)} className='cursor-pointer mx-auto flex px-4 py-2 items-center rounded-lg bg-blue-500 text-white w-[130px]'>
                  <IoIosSearch className='text-2xl mr-2'/>
                  <span>Details</span>
                </span>
              </td>
            </tr> 
          )
        })}
      </tbody>
    </table>
      {openModal && 
        <Modal>
          <>
            <div className='border-b-2 py-2 px-3 flex items-center justify-between'>
              <p className='text-md'>View Detail of <span className='font-bold'>{viewDetail.lname}, {viewDetail.fname}</span></p>
              <IoMdClose className='cursor-pointer' onClick={() => setOpenModal(false)}/>
            </div>

            <div className='py-2 px-3'>
              <p className='font-bold'>Name:</p>
              <p>{viewDetail.lname}, {viewDetail.fname}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Gender:</p>
              <p>{viewDetail.gender}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Birthdate:</p>
              <p>{viewDetail.bdate}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Barangay:</p>
              <p>{viewDetail.barangay}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Total Household:</p>
              <p>{viewDetail.totalhousehold}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Relation to Head:</p>
              <p>{viewDetail.relationtohead}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Bloodtype:</p>
              <p>{viewDetail.bloodtype}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Month Income:</p>
              <p>{viewDetail.monthlyincome}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Length of Stay:</p>
              <p>{viewDetail.lengthofstay}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Nationality:</p>
              <p>{viewDetail.nationality}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Philhealth No:</p>
              <p>{viewDetail.philhealthNo}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>House OwnerShip Status:</p>
              <p>{viewDetail.houseOwnershipStatus}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Dwelling Type:</p>
              <p>{viewDetail.dwellingtype}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Lightning Facilities:</p>
              <p>{viewDetail.lightningFacilities}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Former Address:</p>
              <p>{viewDetail.formerAddress}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Age:</p>
              <p>{viewDetail.age}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Civil Staus:</p>
              <p>{viewDetail.civilstatus}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Birth Place:</p>
              <p>{viewDetail.bplace}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Zone:</p>
              <p>{viewDetail.zone}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Differently Abled Person:</p>
              <p>{viewDetail.differentabledperson}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Marital Status:</p>
              <p>{viewDetail.maritalstatus}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Occupation:</p>
              <p>{viewDetail.occupation}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Household #:</p>
              <p>{viewDetail.householdnum}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Religion:</p>
              <p>{viewDetail.religion}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Skills:</p>
              <p>{viewDetail.skills}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Igpit ID:</p>
              <p>{viewDetail.igpitID}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Highest Educational Attainment:</p>
              <p>{viewDetail.highestEducationalAttainment}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Land Ownership Status:</p>
              <p>{viewDetail.landOwnershipStatus}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Water Usage:</p>
              <p>{viewDetail.waterUsage}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Sanitary Toilet:</p>
              <p>{viewDetail.sanitaryToilet}</p>
            </div>
            <div className='py-2 px-3'>
              <p className='font-bold'>Remarks:</p>
              <p>{viewDetail.remarks}</p>
            </div>
            
          </>
        </Modal>
      }
    </>
  )
}

export default Table