<script setup lang="ts">
import { useMoney } from '~/store/money'
const props = defineProps<PlayerSkillItemProps>()

const moneyStore = useMoney()

const currentExpStr = shortenNumber(props.currExp)
const maxExpStr = shortenNumber(props.maxExp)

export interface PlayerSkillItemProps {
    name: String,
    description: String,
    level: number,
    currExp: number,
    maxExp: number,
}

const incrementMoney = () => {
    moneyStore.increment(10)
}
</script>
<template>
    <div class="card bg-base-200 shadow-xl h-full" @click="incrementMoney">
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