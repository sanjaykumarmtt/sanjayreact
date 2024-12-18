import React, { useState } from "react";
import { Bankpost } from "./spring_co";
// className="border border-black"
function Input_send() {
    var [name,setName]=useState("");
    var [mobel,setMobal]=useState("");
    var [email,setEmail]=useState("");
    var [balance,setbalance]=useState("");
    var [ac_Number,setAC_Number]=useState("");
    var [ifsc,setIFSC]=useState("");

    async function Banksave(){
        var bankdata={name,mobel,email,balance,ac_Number,ifsc};
        var sprresp=Bankpost(bankdata);
        console.log((await sprresp).data)
        alert((await sprresp).data);
    }
    return (
        <div className="h-[100vh] bg-purple-800 ">
            <div className="hidden md:block ">
                <h1 className="pt-6 pl-[20px] text-balance   text-white font-bold text-3xl">The Create new Account</h1>
                <div className="mt-20  ml-[450px] bg-slate-500 shadow-2xl rounded-2xl shadow-black pt-14 h-[400px] w-[450px] flex flex-col gap-5 text-center hover:scale-105 duration-500">
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value); console.log(name)}}></input>

                    <input type="number" placeholder="Mobal" value={mobel} onChange={(e)=>{setMobal(e.target.value);console.log(mobel)}}></input>

                    <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value); console.log(email)}}></input>

                    <input type="number" placeholder="balance" value={balance} onChange={(e)=>{setbalance(e.target.value); console.log(balance)}}></input>

                    <input type="number" placeholder="AC/Number" value={ac_Number} onChange={(e)=>{setAC_Number(e.target.value);console.log(ac_Number) }}></input>

                    <input type="text" placeholder="IFSC" value={ifsc} onChange={(e)=>{setIFSC(e.target.value); console.log(ifsc) }}></input>

                    <button className="text-white font-bold bg-blue-700  ml-80 hover:scale-110 duration-500 w-20 h-8 mt-5 rounded-md" onClick={Banksave}>Submit</button>
                </div>
            </div>
            <div className="bolck md:hidden">
                 <h1 className="pt-6 pl-[40px] text-balance   text-white font-bold text-2xl">The Create new Account</h1>

                <div className="bg-pink-500 mx-5 h-72 rounded-xl mt-20 hover:scale-105 duration-500">
                  <div className=" pt-9 flex flex-col gap-5">
                    <input className="monlinpu" type="text" placeholder="Name"value={name} onChange={(e)=>{setName(e.target.value); console.log(name)}}></input>

                    <input className="monlinpu" type="number" placeholder="Mobal" value={mobel} onChange={(e)=>{setMobal(e.target.value);console.log(mobel)}}></input>

                    <input className="monlinpu" type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value); console.log(email)}}></input>

                    <input className="monlinpu" type="number" placeholder="balance" value={balance} onChange={(e)=>{setbalance(e.target.value); console.log(balance)}}></input>

                    <input className="monlinpu" type="number" placeholder="AC/Number" value={ac_Number} onChange={(e)=>{setAC_Number(e.target.value);console.log(ac_Number) }}></input>

                    <input className="monlinpu" type="text" placeholder="IFSC" value={ifsc} onChange={(e)=>{setIFSC(e.target.value); console.log(ifsc)}}></input>
                </div>

            </div>
                <button className="text-white mx-28 bg-green-500 p-1 px-10 rounded-2xl hover:scale-110 duration-700 mt-8 text-xl" onClick={Banksave}>Submit</button>
            </div>



        </div>
//mt-20 mx-8  bg-slate-600 h-72 pr-8 pt-10   
    )
}
export default Input_send