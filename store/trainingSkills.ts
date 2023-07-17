import { defineStore } from "pinia";

export const EXP_GROWTH_RATE = 1.1;

export const useTrainingSkills = defineStore("trainingSkills", {
  state: (): TrainingSkillsState => {
    return {
      skills: initialSkills,
      currentlyTrainedSkill: null,
    };
  },
  actions: {
    setCurrentlyTrained(skillName: string) {
      console.log(`Updating currently trained skill to: ${skillName}`);
      this.currentlyTrainedSkill = skillName;
    },
    updateSkillExp(skillName: string, exp: number) {
      // TODO: Implement logic
      const skillToChanges = this.skills.filter(({ name }) => {
        return name === skillName;
      });
      updateSkillExp(skillToChanges[0], skillToChanges[0].currentExp + exp);
    },
  },
});

const updateSkillExp = (skill: TrainingSkill, gainedExperience: number) => {
  console.log(
    `Updating skill experience for skill ${skill.name} for ${gainedExperience} points`
  );
  if (skill.currentExp + gainedExperience >= skill.maxExp) {
    skill.currentExp += gainedExperience;
    // level up

    while (skill.currentExp >= skill.maxExp) {
      skill.level += 1;
      skill.currentExp -= skill.maxExp;
      skill.maxExp = getMaxExpForLevel(skill.level - 1);
    }
  } else {
    skill.currentExp += gainedExperience;
  }
};

const getMaxExpForLevel = (level: number): number => {
  if (level < 1) {
    throw new Error("Level must be at least 1.");
  }

  const baseExperience = 1000;

  const requiredExperience =
    baseExperience * Math.pow(EXP_GROWTH_RATE, level - 1);
  const roundedExperience = Math.round(requiredExperience);

  return roundedExperience;
};

export interface TrainingSkillsState {
  skills: Array<TrainingSkill>;
  currentlyTrainedSkill: string | null;
}

export interface TrainingSkill {
  name: string;
  description: string;
  level: number;
  currentExp: number;
  maxExp: number;
  enabled: boolean;
}

const initialSkills: Array<TrainingSkill> = [
  {
    name: "Shadow Cloak",
    description: "Become invisible by blending into the shadows.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: true,
  },
  {
    name: "Shuriken Throw",
    description: "Throw a sharp, star-shaped projectile at your enemy.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: true,
  },
  {
    name: "Iaijutsu",
    description: "Quickly unsheath your sword for a swift and powerful attack.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: true,
  },
  {
    name: "Poison Dart",
    description: "Shoot a poisoned dart that slowly drains enemy health.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: true,
  },
  {
    name: "Katana Slash",
    description:
      "Deliver a fierce slash with your katana, causing physical damage.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: true,
  },
  {
    name: "Smoke Bomb",
    description: "Throw a smoke bomb to disorient and escape from enemies.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: false,
  },
  {
    name: "Meditation",
    description:
      "Restore your health and energy by entering a state of deep focus.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: false,
  },
  {
    name: "Kiai Shout",
    description: "Let out a loud shout to stun your enemies.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: false,
  },
  {
    name: "Dual Wield",
    description: "Wield two weapons at once for a flurry of attacks.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: false,
  },
  {
    name: "Kenjutsu Mastery",
    description: "Master the art of the sword, increasing your attack power.",
    level: 0,
    currentExp: 0,
    maxExp: 1000,
    enabled: false,
  },
];
