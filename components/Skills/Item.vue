<script setup lang="ts">
const props = defineProps<PlayerSkillItemProps>()

const currentExpStr = shortenNumber(props.currExp)
const maxExpStr = shortenNumber(props.maxExp)

export interface PlayerSkillItemProps {
    name: String,
    description: String,
    level: number,
    currExp: number,
    maxExp: number,
}
</script>
<template>
    <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
            <div>
                <div>
                    <div>
                        <b>
                            {{ name }}
                        </b>
                        <div class="float-right">
                            <div class="badge badge-sm badge-secondary flex-end">
                                {{ props.level }}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="text-xs">{{ props.description }}</div>
                <div class="text-secondary text-sm">{{ currentExpStr }} / {{ maxExpStr }} Exp</div>
                <progress class="progress progress-secondary w-full" :value="currExp" :max="maxExp"></progress>
            </div>

        </div>
    </div>
</template>