import Image from 'next/image'
import rocketseatIcon from '@/assets/rocketseat-icon.svg'
import { ProfileButton } from './profile-button'
import { Button } from './ui/button'
import {Plus } from 'lucide-react'
import Link from 'next/link'
import { ThemeSwitcher } from './theme/theme-switcher'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={rocketseatIcon}
          className="size-6 dark:invert"
          alt="Rocketseat"
        />
      </div>

      <div className="mx-auto size-6">
        <Button size="sm" asChild>
        <Link href={'/create-task'}>
              <Plus className="mr-2 size-4" />
              Create task
            </Link>
          </Button>
      </div>
      <div className=" mr-2 flex items-left size-12 gap-4">
      <ThemeSwitcher />
      </div>
      
      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}