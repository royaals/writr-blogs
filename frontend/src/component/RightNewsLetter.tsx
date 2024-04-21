import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const RightNewsLetter = () => {
  return (
    <div className="mt-10">
       <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="m@example.com" required type="email" />
                  </div>
                  <Button className="w-full" type="submit">
                    Subscribe
                  </Button>
                </form>
              </CardContent>
            </Card>
    </div>
  )
}

export default RightNewsLetter
