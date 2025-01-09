import connectDB from "@/utils/db";
import Client from "@/model/Client";
import { NextResponse } from 'next/server';



export const DELETE = async(req , {params})=>{
    const {id} = params;
    try{
        await connectDB();
        const data = await Client.findByIdAndDelete(id);
        return new NextResponse(JSON.stringify(data), { status: 200 });
        
    }catch(error){
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}