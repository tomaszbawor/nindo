<script setup lang="ts">
import { useTrainingSkills } from '~/store/trainingSkills';
const props = defineProps<PlayerSkillItemProps>()

const currentExpStr = computed(() => {
    return shortenNumber(props.currExp)
});

const maxExpStr = computed(() => shortenNumber(props.maxExp));

export interface PlayerSkillItemProps {
    name: string,
    description: string,
    level: number,
    currExp: number,
    maxExp: number,
    isTrained: boolean
}

const markSkill = () => {
    useTrainingSkills().setCurrentlyTrained(props.name)
    const exp = Math.floor(Math.random() * 1000);
    useTrainingSkills().updateSkillExp(props.name, exp);
}
</script>
<template>
    <div class="card bg-base-200 hover:bg-base-300 shadow-xl h-full cursor-pointer" @click="markSkill">
        <div class="card-body flex flex-col h-full">

            <div>
                <div class="flex flex-row justify-between">
                    <b class="text-sm">
                        {{ name }}
                    </b>
                    <div class="badge badge-sm badge-secondary">
                        {{ props.level }}
                    </div>
                </div>

            </div>
            <div class="text-xs">{{ props.description }}</div>

            <div class="mt-auto">
                <div class="text-secondary text-sm">{{ currentExpStr }} / {{ maxExpStr }} Exp</div>
                <progress class="progress progress-secondary w-full" :value="currExp" :max="maxExp"></progress>
            </div>
        </div>
    </div>
</template>