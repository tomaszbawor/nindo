export  interface Skill {
    name: string,
    description: string,
    icon: string
}

export type PlayerSkill = Skill & {
    level: number,
    currentExp: number,
    maxExp: number
}


export const fakeSkills: Array<Skill> = [
    {
        "name": "Shadow Cloak",
        "description": "Become invisible by blending into the shadows.",
        "icon": ""
    },
    {
        "name": "Shuriken Throw",
        "description": "Throw a sharp, star-shaped projectile at your enemy.",
        "icon": ""
    },
    {
        "name": "Iaijutsu",
        "description": "Quickly unsheath your sword for a swift and powerful attack.",
        "icon": ""
    },
    {
        "name": "Poison Dart",
        "description": "Shoot a poisoned dart that slowly drains enemy health.",
        "icon": ""
    },
    {
        "name": "Katana Slash",
        "description": "Deliver a fierce slash with your katana, causing physical damage.",
        "icon": ""
    },
    {
        "name": "Smoke Bomb",
        "description": "Throw a smoke bomb to disorient and escape from enemies.",
        "icon": ""
    },
    {
        "name": "Meditation",
        "description": "Restore your health and energy by entering a state of deep focus.",
        "icon": ""
    },
    {
        "name": "Kiai Shout",
        "description": "Let out a loud shout to stun your enemies.",
        "icon": ""
    },
    {
        "name": "Dual Wield",
        "description": "Wield two weapons at once for a flurry of attacks.",
        "icon": ""
    },
    {
        "name": "Kenjutsu Mastery",
        "description": "Master the art of the sword, increasing your attack power.",
        "icon": ""
    }
]