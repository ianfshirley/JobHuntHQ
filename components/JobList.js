import useResource from '../hooks/useResource';


export default function JobList () {
  
  const { resources } = useResource();

  return (
    <>
      <p>{resources[0].title}</p>
      <p>{resources[0].company}</p>
    </>
  )
}