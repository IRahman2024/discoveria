import { NextResponse } from "next/server";
import dbConnected from "../../../../libs/config/dbConnected";
import Tour from "../../../../libs/models/tours";

// Get all tours

export async function GET() {
    await dbConnected();

    try {
        const data = await Tour.find({});
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.error(error.message, { status: 500 });
      }
}

// Post single tour

export async function POST(req) {
    await dbConnected();

    try {
        const body = await req.json();
        const newTour = new Tour(body); 
        await newTour.save();
        
        return NextResponse.json({success: true, data: newTour}, {status: 201});
    } catch (error) {
        console.error(error);
        return NextResponse.json({success: false, message: error.message}, {status: 500});
      }
}
