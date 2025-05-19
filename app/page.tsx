
import { signIn, auth } from "@/auth"
import { Button } from "@/components/ui/button"
 
export default async function SignIn() {

  const session = await auth()
  if(!session?.user){
    return (
      <div>
        <p>User Signed In as: {session?.user?.name}</p>
      </div>
    )
  }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button type="submit">Signin with GitHub</Button>
    </form>
  )
} 