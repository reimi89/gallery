"use client"

import GlobalApi from "@/utils/GlobalApi";
import React, { useEffect, useState } from "react"

const Feedback = () => {

  const [ name,  setName ] = useState('');
  const [ tel,  setTel ] = useState('');
  const [ comment,  setComment ] = useState('');
  const [ formField, setFormField ] = useState(false);

  useEffect(() => {
    if ( name && tel ) {
        setFormField(true);
    } else {
        setFormField(false);
    }
}, [ name, tel ]);

  const saveFields = () => {
    const data = {
      data: {
        name: name,
        tel: tel,
        comment: comment,
      }
    }
    GlobalApi.getConnection(data).then((resp: Response) => {
      console.log(resp);
      if ( resp ) {
        alert('Заявка отправлена')
      }
    })
  }

  return (
    <section className="w-full pt-10 pb-10 md:pb-20">
      <div className="container mx-auto">
        <h3 className="text-2xl mt-10 mb-10 md:text-6xl text-gray-50 font-medium">Есть вопросы?</h3>
        <div className="grid grid-cols-5">
          <span className="max-w-[1100px] text-md pt-1 text-center leading-tight block">
            *Мы никому не передаем ваши данные. 
            <br />И не сохраняем ваш номер в базу.
          </span>
          <input className="w-[230px] h-[50px] text-center bg-opacity-30 bg-accent text-nav text-2xl " type="text" onChange={(e) => setName(e.target.value)} placeholder="Ваше имя"/>
          <input className="w-[230px] h-[50px] text-center bg-opacity-30 bg-accent text-nav text-2xl" type="tel" onChange={(e) => setTel(e.target.value)} placeholder="Ваш телефон"/>
          <input className="w-[230px] h-[50px] text-center bg-opacity-30 bg-accent text-nav text-2xl" type="text" onChange={(e) => setComment(e.target.value)} placeholder="Комментарий"/>
          <button disabled={!formField} className=" w-[239px] px-4 py-2 bg-all rounded-md text-gray-50 text-2xl text-text font-medium text-center" onClick={() => saveFields()} >Отправить</button>
        </div>
      </div>
    </section>
  )
}

export default Feedback;