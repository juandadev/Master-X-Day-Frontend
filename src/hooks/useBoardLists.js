import axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "../context";

const API_URL = "https://api.trello.com";
const KEY = "9bd9d6de105c7952b848676d6b28f553";

const useBoardLists = ({ text }) => {
  const { token, id } = useStateValue();
  const [lists, setLists] = useState();

  const getBoards = async () => {
    await axios({
      url: `${API_URL}/1/board/${id}/${text}?key=${KEY}&token=${token}`,
      method: "GET",
    })
      .then(({ data }) => {
        setLists(data);
      })
      .catch(() => {
        return;
      });
  };

  useEffect(() => {
    if (token && id && text) {
      console.log(text);
      getBoards();
    }
  }, [token, id, text])

  return { lists };
};

export default useBoardLists;
