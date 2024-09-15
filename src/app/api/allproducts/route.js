
import { NextResponse } from "next/server"
import { allData } from "../../../constants"


export const GET = async() =>{
    return NextResponse.json({
        allData,
        status:"success",
        message:"keep alive"
    })
}