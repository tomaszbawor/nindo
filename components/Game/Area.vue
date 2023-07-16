<script setup lang="ts">

enum ActionTypes {
    ARENA = "ARENA",
    SKILLS = 'SKILLS',
    SHOP = 'SHOP',
    INVENTORY = "INVENTORY",
    FAKE = "FAKE",
}

interface TabInfo {
    label: String,
    isVisible: boolean,
    isActive: boolean // pass this to store later
}

const actionTabs: Record<ActionTypes, TabInfo> = {
    'ARENA': {
        label: "Arena",
        isVisible: true,
        isActive: false
    }, 'SKILLS': {
        label: "Skills",
        isVisible: true,
        isActive: true
    }, 'SHOP': {
        label: "Shop",
        isVisible: true,
        isActive: false
    }, "INVENTORY": {
        label: "Inventory",
        isVisible: true,
        isActive: false
    }, "FAKE": {
        label: "Fake",
        isVisible: false,
        isActive: false
    }
}

</script>

<template>
    <div class="w-full p-4">
        <div class="tabs mb-0 pb-0">
            <fragment v-for="actionTab in actionTabs">
                <a v-if="actionTab.isVisible" :class="actionTab.isActive ? 'tab-active' : ''" class="tab tab-lifted">{{
                    actionTab.label }}</a>
            </fragment>
        </div>
        <!-- ADD SWITCHING COMPONENTS -->
        <div class="bg-base-100 mt-0 rounded-md p-4">
            <SkillsTable />
        </div>
    </div>
</template>