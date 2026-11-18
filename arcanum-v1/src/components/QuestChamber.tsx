'use client';
import {useState} from 'react';
import {questRooms} from '@/lib/quests';
export default function QuestChamber({roomId,solved,award}:{roomId:string;solved:string[];award:(id:string,amount:number)=>void}){
 const room=questRooms[roomId];const [selected,setSelected]=useState<number|null>(null);const [message,setMessage]=useState('');
 if(!room)return <p>تالار یافت نشد.</p>;
 const next=room.missions.findIndex(m=>!solved.includes(m.id));const current=room.missions[next];
 function submit(){if(selected===null)return;if(selected!==current.correct){setMessage('پاسخ هنوز درست نیست. متن درس را یک‌بار دیگر بخوان.');return;}award(current.id,current.xp);setMessage(current.explain);setSelected(null)}
 return <section className="panel"><p className="eyebrow">مأموریت‌های آکادمی</p><h1>{room.missions.every(m=>solved.includes(m.id))?'تالار تکمیل شد ✦':current.title}</h1><p>{room.intro}</p><div className="progressbar"><span style={{width:`${100*(room.missions.length-(next<0?0:room.missions.length-next))/room.missions.length}%`}}/></div><p>مأموریت‌های تکمیل‌شده: {room.missions.filter(m=>solved.includes(m.id)).length.toLocaleString('fa-IR')} از {room.missions.length.toLocaleString('fa-IR')}</p>{current?<div key={current.id}><p className="notice">{current.lesson}</p><h2>{current.question}</h2><div className="choices">{current.choices.map((choice,i)=><button type="button" className={selected===i?'selected-answer':''} aria-pressed={selected===i} key={i} onClick={()=>{setSelected(i);setMessage('')}}>{choice}</button>)}</div><button className="primary" disabled={selected===null} onClick={submit}>ثبت پاسخ و دریافت {current.xp.toLocaleString('fa-IR')} XP</button><p role="status">{message}</p></div>:<div className="result"><span className="sigil">✦</span><h2>تمام مأموریت‌های این تالار را به پایان رساندی!</h2><p>به نقشه بازگرد و ببین کدام در تازه برایت گشوده شده است.</p></div>}</section>
}
