"use client"
import Router, { useRouter } from "next/navigation";
export const Users = ({ users }) => { 
  const router = useRouter()
  return (
    <ul className='list-group'>
      {users.map((item) => (
        <li
          className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'
          key={item?.id}
          onClick={() => {
            router.push(`users/${item?.id}`);
          }}
        >
          <div>
            <h5>
            {item?.id} {item?.first_name} {item?.last_name}
            </h5>
            <p className=''>{item?.email}</p>
          </div>
          <img
            src={item?.avatar}
            alt={item?.email}
            style={{borderRadius: "50%"}}
          />
        </li>
      ))}
    </ul>
  );
}

export default Users