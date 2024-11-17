import TreadingHistory from '../Portfilio/TreadingHistory'

const Activity = () => {
  return (
    <div className='px-20 bg-gradient-to-t from-yellow-300 to-orange-400 h-screen'>
      <p className='py-5 pb-10 text-2xl font-semibold'>Trading History</p>
        <TreadingHistory/>
    </div>
  )
}

export default Activity