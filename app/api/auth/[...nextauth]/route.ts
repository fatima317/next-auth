//dynamic route lessen folder structure & storage
// app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/lib/auth";

export const {POST, GET} = handlers;