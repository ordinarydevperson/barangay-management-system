import * as React from 'react'
import Select from 'react-select'
import { IoIosSearch } from "react-icons/io";
import Table from './Table';
import Section from '../../components/Section/Section';
import LoadMorePost from '../../components/UI/LoadMorePost';
import ContactUs from '../../components/UI/ContactUs';

const Home = () => {
  const [allResident, setAllResident] = React.useState([])
  const [loadMore, setLoadMore] = React.useState(false)
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
    <div className='container mx-auto bg-grayish'>
        <Section styles='bg-cover bg-hero bg-center mb-5 py-20'>
          <div className='flex flex-col items-center justify-center mt-10'>
            <p className='mt-10 text-white'>REGAL</p>
            <h1 className='text-2xl	my-10 font-bold text-white'>LOREM IPSUM</h1>
            <p className='overflow-hidden text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga repellendus modi cupiditate dignissimos facilis sunt ipsum, placeat error fugit voluptatibus necessitatibus, rem rerum perspiciatis atque sint aperiam voluptates sed lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button className='mt-10 rounded-3xl border-x-4	px-6 py-3 bg-slate-50 font-bold font-size'>READ MORE</button>
          </div>
        </Section>
        <Section>
          <div className='flex items-center justify-center'>
            <div className='mr-20 basis-1/4 bg-white'>
              <div className=''>
                <img src="./public/images/bg-hero.png" alt="a colorful image" className='h-80 w-80 ml-2 rounded-md'/>
                <h2 className='text-center text-xl font-bold mt-2'>LOREM IPSUM</h2>
                <div className='text-center mt-8'>
                  <span className='font-light'>Anna Maria Lopez &#9702; Mar15,2022 &#9702; 10 min read </span>
                  <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus fugiat perferendis inventore cum, doloremque in blanditiis</p>
                </div>
              </div>
            </div>
            <div className='mr-20 basis-1/4 bg-white	'>
              <div>
                <img src="./public/images/bg-hero.png" alt="" className='h-80 w-80 ml-2 rounded-md' />
                <h2 className='text-center text-xl font-bold mt-2'>LOREM IPSUM</h2>
                <div className='text-center mt-8'>
                  <span className='font-light'>John Doe &#9702; Feb10,2022 &#9702; 20 min read </span>
                  <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus fugiat perferendis inventore cum, doloremque in blanditiis</p>
                </div>
              </div>
            </div>
            <div className='basis-1/4 bg-white	'>
              <div>
                <img src="./public/images/bg-hero.png" alt="" className='bg-auto h-80 w-80 ml-2 rounded-md'/>
                <h2 className='text-center text-xl font-bold mt-2'>LOREM IPSUM</h2>
                <div className='text-center mt-8'>
                  <span className='font-light'>Marqueez Type &#9702; Dec23,2022 &#9702; 1 hour read </span>
                  <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus fugiat perferendis inventore cum, doloremque in blanditiis</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section styles='mt-10 max-w-[1268px] h-full mx-auto container px-20'>
            <h1 className='text-center text-3xl	font-semibold'>Latest Posts</h1>
            <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, illum!</p>
            <div className='container flex align-center justify-center mt-10 gap-4'>
              <div className=''>
                <div className='mb-5 relative bg-hero bg-cover'>
                  <img src="../public/images/bg-hero.png" alt="a ceremony of sk tournament" className='w-full	rounded-md '/>
                </div>
                <div className='flex items-center justify-between gap-x-4'>
                  <div className='w-[50%] h-[300px] '>
                   <img src="../public/images/bg-hero.png" alt="" className='rounded-md' />
                  </div>
                  <div className='w-[50%] h-[300px] '>
                    <div className='mt-5'>
                      <span className='font-light'>Events &#9702; 20 min read </span>
                      <h2 className='mt-3 mb-10 text-2xl font-bold uppercase'>Lorem ipsum</h2>
                      <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus qui dicta est! Eos dicta amet natus iure, voluptatem maxime?</p>
                      <span className='font-light'>Carol Francis &#9702; Feb10,2022 </span>
                    </div>
                  </div>
                </div>

                <div className='flex mt-4 items-center justify-between gap-x-4'>
                  <div className='w-[50%] h-[300px] '>
                    <img src="../public/images/bg-hero.png" alt="" className='rounded-md' />
                  </div>
                  <div className='w-[50%] h-[300px]'>
                    <div className='mt-5'>
                      <span className='font-light'>Events &#9702; 20 min read </span>
                      <h2 className='mt-3 mb-10 text-2xl font-bold uppercase'>Lorem ipsum</h2>
                      <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus qui dicta est! Eos dicta amet natus iure, voluptatem maxime?</p>
                      <span className='font-light'>Carol Francis &#9702; Feb10,2022 </span>
                    </div>
                  </div>

                  
                </div>
                <div className='text-center my-5'>
                  <button onClick={() => setLoadMore(!loadMore)}className='rounded-3xl border-2 border-slate-400 bg-slate-50 px-6 py-2 uppercase'>Load more posts</button>
                </div>
              </div>
              <div className='bg-white p-10 w-1/2'>
                <h3 className='font-semibold text-2xl mb-5'>Events</h3>
                <div className='flex gap-3 mr-10 left-10px'>
                  <img src="../public/images/bg-hero.png" alt="" className='size-24 mb-4	'/>
                  <div> CONTENT HERE </div>
                </div>
                <div className='flex gap-3'>
                  <img src="../public/images/bg-hero.png" alt="" className='size-24 mb-4 '/>
                  <div> CONTENT HERE</div>
                </div>
                <div className='flex gap-3'>
                  <img src="../public/images/bg-hero.png" alt="" className='size-24 mb-4 '/>
                  <div> CONTENT HERE</div>
                </div>
                <div className='flex gap-3'>
                  <img src="../public/images/bg-hero.png" alt="" className='size-24 mb-4 '/>
                  <div> CONTENT HERE</div>
                </div>
              </div>
            </div>
            {loadMore && <LoadMorePost />}
            {/* {loadMore && <ContactUs /> } */}
            
        </Section>
    </div>
  )
}

export default Home