import useResource from '../hooks/useResource';


export default function JobList() {

  const { resources } = useResource();

  return (
    <>
      {resources && resources.map((job) => {
        return (
          <div key={job.id} job={job}>
          <p>{job.title}</p>
          <p>{job.company}</p>
        </div>
        )
      })}
    </>
  )
}