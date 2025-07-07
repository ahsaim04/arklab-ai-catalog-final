"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Chrome } from "lucide-react"

export function GoogleSignIn() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      variant="outline"
      size="lg"
      className="w-full"
    >
      <Chrome className="mr-2 h-5 w-5" />
      Continue with Google
    </Button>
  )
}
