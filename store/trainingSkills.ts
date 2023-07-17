import { defineStore } from "pinia";

export const useTrainingSkills = defineStore('trainingSkills', {
    state: (): TrainingSkillsState => {
        return {
            skills: initialSkills,
            currentlyTrainedSkill: null
        }
    }, actions: {
        setCurrentlyTrained(skillName: string) {
            console.log(`Updating currently trained skill to: ${skillName}`)
            this.currentlyTrainedSkill = skillName
        }, updateSkillExp(skillName: string, exp: number) {
            // TODO: Implement logic
            const skillToChanges = this.skills.filter(({name}) => {
                return name === skillName
            })
              skillToChanges[0].currentExp *=  2;
            skillToChanges[0].currentExp +=  exp;
        }
    }
})

export interface TrainingSkillsState {
    skills: Array<TrainingSkill>
    currentlyTrainedSkill: string | null
}

export interface TrainingSkill {
    name: string,
    description: string,
    level: number,
    currentExp: number,
    maxExp: number,
    enabled: boolean
}


const initialSkills: Array<TrainingSkill>  = [{
        "name": "Shadow Cloak",
        "description": "Become invisible by blending into the shadows.",
        level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: true
    },
    {
        "name": "Shuriken Throw",
        "description": "Throw a sharp, star-shaped projectile at your enemy.",
          level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: true
    },
    {
        "name": "Iaijutsu",
        "description": "Quickly unsheath your sword for a swift and powerful attack.",
          level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: true
    },
    {
        "name": "Poison Dart",
        "description": "Shoot a poisoned dart that slowly drains enemy health.",
         level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: true
    },
    {
        "name": "Katana Slash",
        "description": "Deliver a fierce slash with your katana, causing physical damage.",
         level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: true
    },
    {
        "name": "Smoke Bomb",
        "description": "Throw a smoke bomb to disorient and escape from enemies.",
         level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: false
    },
    {
        "name": "Meditation",
        "description": "Restore your health and energy by entering a state of deep focus.",
         level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: false
    },
    {
        "name": "Kiai Shout",
        "description": "Let out a loud shout to stun your enemies.",
          level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: false
    },
    {
        "name": "Dual Wield",
        "description": "Wield two weapons at once for a flurry of attacks.",
          level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: false
    },
    {
        "name": "Kenjutsu Mastery",
        "description": "Master the art of the sword, increasing your attack power.",
          level: 0,
        currentExp: 0,
        maxExp: 1000,
        enabled: false
    }
]


