import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function UserNav() {
  return(
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>
          <Avatar>
            <AvatarImage/>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}