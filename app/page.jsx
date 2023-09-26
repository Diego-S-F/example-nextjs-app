import Users from "@/components/Users";
export const fetchUsers = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json()
  return data.data
}

export const IndexPage = async () => {
  
  const response = await fetchUsers()

  return (
        <Users users={response} />
  );
}
export default IndexPage