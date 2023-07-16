<script setup lang="ts">

import { PlayerSkill, fakeSkills } from '~/domain/skils'
import { TrainingSkill, useTrainingSkills } from '~/store/trainingSkills'

const currentlyTrained = useTrainingSkills().currentlyTrainedSkill

const skills: Array<TrainingSkill> = useTrainingSkills().skills
</script> 
<template>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        <fragment v-for="skill in skills">
            <SkillsItem v-if="skill.enabled" :name="skill.name" :description="skill.description"
                :curr-exp="skill.currentExp" :max-exp="skill.maxExp" :level="skill.level"
                :isTrained="skill.name === currentlyTrained" />
        </fragment>
    </div>
</template>