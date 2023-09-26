export const getUser = async (id) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`); 
  const data = await response.json()
  return data.data
}

export const UsersDatails = async ({params}) => {
  const userDetail = await getUser(params?.id)
  return (
    <>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header text-center'>
              <img src={userDetail?.avatar} alt={userDetail?.first_name} />
            </div>
            <div className='card-body text-center'>
              <h3>
                {userDetail?.id} {userDetail?.first_name}{' '}
                {userDetail?.last_name}
              </h3>
              <p>{userDetail?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UsersDatails