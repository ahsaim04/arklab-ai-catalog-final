"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function SessionSyncer() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      localStorage.setItem("arklab-session", JSON.stringify(session));
    } else {
      localStorage.removeItem("arklab-session");
    }
  }, [session]);

  return null;
} 