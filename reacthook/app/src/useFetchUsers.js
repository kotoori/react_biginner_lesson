import { useEffect, useState } from 'react';

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchUsers = () => {
    setIsLoading(true); //ローディング中にする
    setIsError(false); //エラーがない状態にする
    
    fetch("http://127.0.0.1:5173/data.json") //jsonファイルを取得
    .then(response => response.json())
    .then((json) => { //Json展開
      const users = json.people.map(user => ({
        name:user.name,
        age:user.age,
        hobby:user.hobby.join(',')
      }))
      setUserList(users);
    })
    .catch(() => setIsError(true)) //エラーが発生したときに実行される
    .finally(() => setIsLoading(false)); //すべてが終わったときに実行される
  }
  return { userList, isLoading, isError, onClickFetchUsers };
}
