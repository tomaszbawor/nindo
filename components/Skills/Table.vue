<script setup lang="ts">

import { fakeSkills, PlayerSkill } from './Skills'
const skills: Array<PlayerSkill> = fakeSkills.map<PlayerSkill>((fakeSkill) => {
    return {
        ...fakeSkill,
        level: Math.floor(Math.random() * 10) + 1,
        maxExp: 1000,
        currentExp: Math.floor(Math.random() * 1001)
    }
})
</script>
<template>
    <div class="grid grid-cols-5 gap-4">
        <fragment v-for="skill in skills">
            <SkillsItem :name="skill.name" :description="skill.description" :curr-exp="skill.currentExp"
                :max-exp="skill.maxExp" :level="skill.level" />
        </fragment>
    </div>
</template>