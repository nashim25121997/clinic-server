# Clinic Server (Node/Express/MongoDB)

## Setup
1. `cd server`
2. `npm install`
3. Copy `.env.example` to `.env` and set `MONGO_URI`
4. Run in dev mode: `npm run dev` (needs MongoDB running locally)
   - Default API URL: http://localhost:5000/api

## Endpoints
- Patients: `/api/patients`
- Doctors: `/api/doctors`
- Staff: `/api/staff`
- Appointments: `/api/appointments`
- Cases: `/api/cases`
