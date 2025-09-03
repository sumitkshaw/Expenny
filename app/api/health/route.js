// app/api/health/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  // This creates a simple health check response
  const healthData = {
    status: 'OK',
    message: 'Expenny backend service is operational',
    timestamp: new Date().toISOString(),
    service: 'Expenny API'
  };

  // Return the JSON response with a 200 status code
  return NextResponse.json(healthData, { status: 200 });
}