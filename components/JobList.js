import useResource from '../hooks/useResource';


export default function JobList() {

  const { resources } = useResource();

  return (
    <div className='bg-blue-300'>
      <h3 className='text-2xl pb-2'>Job List</h3>
      {resources && resources.map((job) => {
        return (
          <div key={job.id} job={job}>
          <p>{job.title}</p>
          <p>{job.company}</p>
        </div>
        )
      })}
    </div>
  )
}