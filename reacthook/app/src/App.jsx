import { useEffect, useState } from 'react';
import { useFetchUsers} from './useFetchUsers';

export const App = () => {
  const { userList, isLoading, isError, onClickFetchUsers } = useFetchUsers();

  return(
    <div>
      <button onClick={onClickFetchUsers}>ユーザー取得</button>
      {isError && <p style={{color:"red"}}>エラーが発生しました</p>}
      {isLoading ? (<p>データを取得中です</p>) : (userList.map(user => (
        <p>{user.name}({user.age}) {user.hobby}</p>
      )))}
    </div>
  );
}
