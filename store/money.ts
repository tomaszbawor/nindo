import { defineStore } from "pinia";

export interface MoneyState {
    ryuCount: number;
}

export const useMoney = defineStore('money', {
    state: (): MoneyState => {
        return {
            ryuCount: 0
        }
    }, actions: {
        increment(num: number) {
            this.ryuCount = this.ryuCount + num
        },
        decrement(num: number) {
            this.ryuCount = this.ryuCount - num
        }
    }
})