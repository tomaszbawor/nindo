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