import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.services";

export async function proxy (request: NextRequest){
    
    let isAuthenticated = false;
    let isAdmin = false;
    const {data} = await userService.getSession()

    if(data){
        isAuthenticated = true;
        isAdmin = data.user.role
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"]
}