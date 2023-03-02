import React, { useState } from 'react'
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'
import { useSetAtom} from 'jotai'
import { tokenAtom } from "../../atoms/atoms";
import useFetch from "../../tools/useFetch";

export const Sign_up = () => {

  const navigate = useNavigate();

  const setToken = useSetAtom(tokenAtom)

  const [formData, setFormData] = useState(
    {
      user: {
        email: "",
        password: ""
      }
    }
  )

  const handleChange = (e) => {
    setFormData({
      ...formData,
      user: {
        ...formData.user,
        [e.target.id]: e.target.value,
      }
    });
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const sendData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const data = await useFetch( "http://localhost:3000/users", sendData );
    const token = await data.token;

    Cookies.set("token", token);
    setToken(token);
    navigate("/");

  }

  return (
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" id="email" onChange={handleChange} />

        <label>Password</label>
        <input type="password" id="password" onChange={handleChange} />

        <button type="submit">S'inscrire</button>
      </form>
  )
}
